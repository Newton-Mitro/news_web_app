<?php

namespace App\Features\Article\Controllers;

use App\Features\Article\Models\Article;
use App\Features\Article\Requests\StoreArticleRequest;
use App\Features\Article\Requests\UpdateArticleRequest;
use App\Features\Attachment\Models\Attachment;
use App\Features\Category\Models\Category;
use Illuminate\Support\Facades\Storage;
use Inertia\Inertia;

class ArticleController
{
    public function index()
    {
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = Article::where('title', 'like', "%{$searchText}%")
            ->with(['category', 'author', 'attachments'])->orderBy('created_at', 'desc')
            ->paginate($recordPerPage);

        return Inertia::render('AdminPanel/Article/ListArticles', [
            'response' => $response,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function create()
    {
        $categories = Category::all();
        return Inertia::render('AdminPanel/Article/CreateArticle', [
            'categories' => $categories,
        ]);
    }

    public function store(StoreArticleRequest $request)
    {
        $userId = auth()->id();
        $article = new Article();
        $article->title = $request->title;
        $article->slug = $request->slug;
        $article->body = $request->body;
        $article->summery = $request->summery;
        $article->tags = $request->tags;
        $article->video_url = $request->video_url;
        $article->status = $request->status;
        $article->featured = filter_var($request->featured, FILTER_VALIDATE_BOOLEAN);
        $article->category_id = $request->category_id;
        $article->created_by = $userId;
        $article->updated_by = $userId;
        $article->save();

        // Handle attachments
        if ($request->hasFile('new_image')) {
            $file = $request->file('new_image');
            $path = $file->store('articles', 'public');
            Attachment::create([
                'article_id' => $article->id,
                'name' => $file->getClientOriginalName(),
                'path' => $path,
                'url' => asset(Storage::url($path)),
                'mime' => $file->getClientMimeType(),
            ]);
        }
        return redirect()->route('articles.index')->with('success', 'Article created successfully!');
    }

    public function show(int $id)
    {
        $article = Article::with(['attachments', 'category', 'author', 'updater'])->findOrFail($id);
        return Inertia::render('AdminPanel/Article/ViewArticle', [
            'article' => $article,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function edit(int $id)
    {
        $article = Article::with(['attachments'])->findOrFail($id);
        $categories = Category::all();
        return Inertia::render('AdminPanel/Article/EditArticle', [
            'article' => $article,
            'categories' => $categories,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function update(UpdateArticleRequest $request, int $id)
    {
        $article = Article::find($id);
        $article->title = $request->title;
        $article->slug = $request->slug;
        $article->body = $request->body;
        $article->summery = $request->summery;
        $article->tags = $request->tags;
        $article->video_url = $request->video_url;
        $article->status = $request->status;
        $article->featured = filter_var($request->featured, FILTER_VALIDATE_BOOLEAN); // Convert to boolean
        $article->category_id = $request->category_id;
        $article->updated_by = auth()->id();
        $article->save();

        // Handle deleted attachments
        if ($request->has('deleted_images')) {
            $attachment = Attachment::find($request->input('deleted_images'));
            if ($attachment) {
                // Delete the file from storage
                Storage::delete($attachment->path);

                // Delete the attachment record from the database
                $attachment->delete();
            }
        }

        // Handle new attachments
        if ($request->hasFile('new_image')) {
            $file = $request->file('new_image');
            $path = $file->store('articles', 'public');
            Attachment::create([
                'article_id' => $article->id,
                'name' => $file->getClientOriginalName(),
                'path' => $path,
                'url' => asset(Storage::url($path)),
                'mime' => $file->getClientMimeType(),
            ]);
        }

        return redirect()->back()->with('success', 'Article updated successfully!');
    }

    public function destroy(int $id)
    {
        $foundArticle = Article::findOrFail($id);
        $foundArticle->delete();

        return redirect()->route('articles.index')->with('success', 'Article deleted successfully!');
    }

    public function updateStatus(Article $article, int $id)
    {
        $foundArticle = Article::findOrFail($id);
        if ($foundArticle->status === 'Published') {
            $foundArticle->status = 'Draft';
        } else {
            $foundArticle->status = 'Published';
        }
        $foundArticle->save();

        return redirect()->back()->with('success', 'Article ' . $foundArticle->status . ' successfully!');
    }
}
