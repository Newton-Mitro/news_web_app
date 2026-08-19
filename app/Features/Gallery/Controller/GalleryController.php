<?php

namespace App\Features\Gallery\Controller;

use App\Features\Gallery\Models\Gallery;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Illuminate\Support\Facades\File;

class GalleryController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = Gallery::where('title', 'like', "%{$searchText}%")
            ->orderBy('created_at', 'desc')
            ->paginate($recordPerPage);

        return Inertia::render('AdminPanel/Gallery/ListGallery', [
            'response' => $response,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        $gallery = Gallery::all();
        return Inertia::render('AdminPanel/Gallery/CreateGallery', [
            'gallery' => $gallery,
        ]);
        // dd("this is new");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        //

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string', 'max:500'],
            'summery' => ['nullable', 'string', 'max:500'],
            'new_image' => [
                'required',
                'file',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
        ]);

        $NewPage = new Gallery();

        $NewPage->title = $validated["title"];

        $NewPage->slug = $validated["slug"];

        $NewPage->description = $validated["body"];

        $NewPage->sort_description = $validated["summery"];

        if (isset($validated['new_image'])) {
            $attachmentFile = $validated['new_image'];
            $imageName = time() . '.' . $attachmentFile->getClientOriginalExtension();
            $attachmentPath =  "attachments";
            $attachmentFile->move(public_path($attachmentPath), $imageName);
            $NewPage->attachment_name = $imageName;
            $NewPage->attachment_path = $attachmentPath;
            $NewPage->attachment_mime = $attachmentFile->getClientMimeType();
            $NewPage->attachment_url = url($attachmentPath . '/' . $imageName);
        }

        $NewPage->save();

        return redirect()->route('gallery.index')->with('success', 'Gallery created successfully!');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {
        //
        $gallery = Gallery::findOrFail($id);

        return Inertia::render('AdminPanel/Gallery/ViewGallery', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $gallery = Gallery::findOrFail($id);

        return Inertia::render('AdminPanel/Gallery/EditGallery', [
            'gallery' => $gallery,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */

    public function update(Request $request, string $id)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'body' => ['required', 'string', 'max:500'],
            'summery' => ['nullable', 'string', 'max:500'],
            'new_image' => [
                'nullable',
                'file',
                'image',
                'mimes:jpg,jpeg,png,webp',
                'max:2048',
            ],
        ]);

        $gallery = Gallery::findOrFail($id);

        $gallery->title = $validated['title'];
        $gallery->slug = $validated['slug'];
        $gallery->sort_description = $validated['summery'] ?? null;
        $gallery->description = $validated['body'] ?? null;

        // Check if a new image was uploaded
        if ($request->hasFile('new_image')) {

            // Remove previous image
            if (
                !empty($gallery->attachment_path) &&
                !empty($gallery->attachment_name)
            ) {
                $oldFile = public_path(
                    $gallery->attachment_path . '/' . $gallery->attachment_name
                );

                if (File::exists($oldFile)) {
                    File::delete($oldFile);
                }
            }

            // Upload new image
            $imageFile = $request->file('new_image');

            $imageName = time() . '_' . $imageFile->getClientOriginalName();

            $imagePath = 'attachments';

            $imageFile->move(
                public_path($imagePath),
                $imageName
            );

            // Save new image information
            $gallery->attachment_name = $imageName;
            $gallery->attachment_path = $imagePath;
            $gallery->attachment_mime = $imageFile->getClientMimeType();
            $gallery->attachment_url = url(
                $imagePath . '/' . $imageName
            );
        }

        $gallery->save();

        return redirect()
            ->route('gallery.index')
            ->with('success', 'Gallery updated successfully!');
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $gallery = Gallery::findOrFail($id);


        if (
            !empty($gallery->attachment_path) &&
            !empty($gallery->attachment_name)
        ) {
            $filePath = public_path(
                $gallery->attachment_path . '/' . $gallery->attachment_name
            );

            if (File::exists($filePath)) {
                File::delete($filePath);
            }
        }

        $gallery->delete();

        return redirect()
            ->route('gallery.index')
            ->with('success', 'Gallery deleted successfully!');
    }
}
