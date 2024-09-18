<?php

namespace App\Features\Article\Controllers;

use App\Core\Controllers\Controller;
use App\Features\Article\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index()
    {
        $articles = Article::all();
        return Inertia::render('AdminPanel/Article/ListArticles', [
            'articles' => $articles,
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPanel/Article/CreateArticle', [
            //            'articles' => $articles,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $article = new Article();
        $article->title = $request->title;
        $article->body = $request->body;
        $article->user_id = Auth::id(); // Assuming articles are associated with users
        $article->save();

        return redirect()->route('articles.index')->with('status', 'Article created successfully!');
    }

    public function show(Article $article)
    {
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
