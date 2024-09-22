<?php

namespace App\Features\Article\Controllers;

use App\Core\Controllers\Controller;
use App\Features\Article\Models\Article;
use App\Features\Article\Requests\StoreArticleRequest;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = Article::where('title', 'like', "%{$searchText}%")->with(['category', 'author'])->orderBy('created_at', 'desc')->paginate($recordPerPage);
        return Inertia::render('AdminPanel/Article/ListArticles', [
            'response' => $response,
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPanel/Article/CreateArticle', [
            //            'articles' => $articles,
        ]);
    }

    public function store(StoreArticleRequest $request)
    {
        $post = new Article();
        $post->uuid = $request->uuid;
        $post->title = $request->title;
        $post->slug = $request->slug;
        $post->body = $request->body;
        $post->summery = $request->summery;
        $post->video_url = $request->video_url;
        $post->status = $request->status;
        $post->featured = $request->featured;
        $post->category_id = $request->category_id;
        $post->created_by = $request->created_by;
        $post->updated_by = $request->updated_by;
        $post->save();

        return redirect()->route('articles.index')->with('status', 'Article created successfully!');
    }

    public function show(Article $article)
    {
        $article = Article::with(['attachments', 'category', 'author', 'updater'])->findOrFail($article->id);
        return Inertia::render('AdminPanel/Article/ViewArticle', [
            'article' => $article,
        ]);
    }

    public function edit(Article $article)
    {
        return Inertia::render('AdminPanel/Article/EditArticle', [
            'article' => $article,
        ]);
    }

    public function update(Request $request, Article $article)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $article->title = $request->title;
        $article->body = $request->body;
        $article->save();

        return redirect()->route('articles.index')->with('status', 'Article updated successfully!');
    }

    public function destroy(Article $article)
    {
        $article->delete();

        return redirect()->route('articles.index')->with('status', 'Article deleted successfully!');
    }
}
