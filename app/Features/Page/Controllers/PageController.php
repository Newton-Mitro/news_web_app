<?php

namespace App\Features\Page\Controllers;

use App\Features\Attachment\Models\Attachment;
use App\Features\Page\Models\Page;
use App\Features\Page\Requests\StorePageRequest;
use App\Features\Page\Requests\UpdatePageRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PageController
{
    public function index()
    {
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = Page::where('title', 'like', "%{$searchText}%")
            ->with(['author', 'attachments'])->orderBy('created_at', 'desc')
            ->paginate($recordPerPage);

        return Inertia::render('AdminPanel/Page/ListPages', [
            'response' => $response,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPanel/Page/CreatePage');
    }

    public function store(StorePageRequest $request)
    {
        DB::beginTransaction(); // Start the transaction

        try {
            $userId = auth()->id();

            // Create a new Page
            $page = new Page();
            $page->title = $request->title;
            $page->slug = $request->slug;
            $page->body = $request->body;
            $page->summery = $request->summery;
            $page->status = $request->status;
            $page->created_by = $userId;
            $page->updated_by = $userId;
            $page->save();

            // Handle attachments using polymorphic relationship
            if ($request->hasFile('new_image')) {
                $file = $request->file('new_image');

                // Store the file in the 'pages' directory under 'public'
                $path = $file->store('pages', 'public');

                // Create the attachment and associate it with the Page
                $page->attachments()->create([
                    'name' => $file->getClientOriginalName(),
                    'path' => $path,
                    'url' => asset(Storage::url($path)),
                    'mime' => $file->getClientMimeType(),
                ]);
            }

            DB::commit(); // Commit the transaction if all operations succeed

            return redirect()->route('pages.index')->with('success', 'Page created successfully!');
        } catch (\Exception $e) {
            DB::rollBack(); // Rollback the transaction on failure

            return redirect()->back()->withErrors('Failed to create the page. Please try again.');
        }
    }

    public function show(int $id)
    {
        $page = Page::with(['attachments', 'category', 'author', 'updater'])->findOrFail($id);
        return Inertia::render('AdminPanel/Page/ViewPage', [
            'page' => $page,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function edit(int $id)
    {
        $page = Page::with(['attachments'])->findOrFail($id);
        return Inertia::render('AdminPanel/Page/EditPage', [
            'page' => $page,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function update(UpdatePageRequest $request, int $id)
    {
        DB::beginTransaction();

        try {
            // Find the page
            $page = Page::findOrFail($id);

            // Update page properties
            $page->update([
                'title' => $request->title,
                'slug' => $request->slug,
                'body' => $request->body,
                'summery' => $request->summery,
                'status' => $request->status,
                'updated_by' => auth()->id(),
            ]);

            $deletedImageId = (int) $request->input('deleted_images');

            // Fetch the attachment by ID
            $attachment = Attachment::where('id', $deletedImageId)
                ->where('attachable_type', Page::class) // Ensure it belongs to the Page model
                ->where('attachable_id', $page->id) // Ensure it belongs to this specific Page
                ->first();

            if ($attachment) {
                // Delete the file from storage
                if ($attachment->path && Storage::disk('public')->exists($attachment->path)) {
                    Storage::disk('public')->delete($attachment->path);
                }

                // Delete the attachment record from the database
                $attachment->delete();
            }


            // Handle new attachments
            if ($request->hasFile('new_image')) {
                $file = $request->file('new_image');

                // Store the file and save attachment
                $path = $file->store('pages', 'public');
                $page->attachments()->create([
                    'name' => $file->getClientOriginalName(),
                    'path' => $path,
                    'url' => asset(Storage::url($path)),
                    'mime' => $file->getClientMimeType(),
                ]);
            }

            DB::commit();

            return redirect()->back()->with('success', 'Page updated successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            report($e);

            return redirect()->back()->with('error', 'An error occurred while updating the page.');
        }
    }

    public function destroy(int $id)
    {
        $foundPage = Page::findOrFail($id);
        $foundPage->delete();

        return redirect()->route('pages.index')->with('success', 'Page deleted successfully!');
    }

    public function updateStatus(Page $page, int $id)
    {
        $foundPage = Page::findOrFail($id);
        if ($foundPage->status === 'Published') {
            $foundPage->status = 'Draft';
        } else {
            $foundPage->status = 'Published';
        }
        $foundPage->save();

        return redirect()->back()->with('success', 'Page ' . $foundPage->status . ' successfully!');
    }
}
