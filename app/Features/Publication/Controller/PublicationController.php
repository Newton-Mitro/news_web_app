<?php

namespace App\Features\Publication\Controller;

use App\Features\Publication\Models\Publication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class PublicationController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = Publication::where('title', 'like', "%{$searchText}%")
            ->orderBy('created_at', 'desc')
            ->paginate($recordPerPage);

        return Inertia::render('AdminPanel/Publication/ListPublication', [
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
        // dd("create");
        return Inertia::render('AdminPanel/Publication/CreatePublication');
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {
        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255', 'unique:publications,slug'],
            'attachment' => ['required', 'file', 'mimes:pdf', 'max:10240'],
            'publish_date' => ['nullable', 'date'],
        ]);



        // Make sure file exists
        if (!$request->hasFile('attachment')) {
            return back()->withErrors([
                'attachment' => 'PDF file was not uploaded.',
            ]);
        }

        // Store PDF
        $attachmentPath = $request->file('attachment')
            ->store('publication', 'public');

        // dd($attachmentPath);

        Publication::create([
            'title' => $validated['title'],
            'slug' => $validated['slug'],
            'attachment_path' => $attachmentPath,
            'publish_date' => $validated['publish_date'],
        ]);

        return redirect()
            ->route('publication.index')
            ->with('success', 'Publication created successfully.');
    }

    /**
     * Display the specified resource.
     */
    public function show(string $id)
    {

        $publication = Publication::findOrFail($id);

        return Inertia::render('AdminPanel/Publication/ShowPublication', [
            'publication' => $publication,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        $publication = Publication::findOrFail($id);

        return Inertia::render('AdminPanel/Publication/EditPublication', [
            'publication' => $publication,
        ]);
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        $publication = Publication::findOrFail($id);

        $validated = $request->validate([
            'title' => ['required', 'string', 'max:255'],
            'slug' => ['required', 'string', 'max:255'],
            'publish_date' => ['required', 'date'],
            'attachment' => ['nullable', 'file', 'mimes:pdf', 'max:10240'],
            'remove_old_attachment' => ['nullable', 'boolean'],
        ]);

        $data = [
            'title' => $validated['title'],
            'slug' => $validated['slug'],
            'publish_date' => $validated['publish_date'],
        ];

        if ($request->hasFile('attachment')) {

            if ($publication->attachment_path) {
                Storage::disk('public')->delete(
                    $publication->attachment_path
                );
            }

            $data['attachment_path'] = $request
                ->file('attachment')
                ->store('publication', 'public');
        } elseif ($request->boolean('remove_old_attachment')) {

            if ($publication->attachment_path) {
                Storage::disk('public')->delete(
                    $publication->attachment_path
                );
            }

            $data['attachment_path'] = null;
        }

        $publication->update($data);

        return redirect()
            ->route('publication.index')
            ->with('success', 'Publication updated successfully.');
    }

    /**
     * Remove the specified resource from storage.
     */


    public function destroy(string $id)
    {
        $publication = Publication::findOrFail($id);

        // Delete PDF file from storage
        if ($publication->attachment_path) {
            Storage::disk('public')->delete(
                $publication->attachment_path
            );
        }

        // Delete database record
        $publication->delete();

        return redirect()
            ->route('publication.index')
            ->with('success', 'Publication deleted successfully.');
    }
}
