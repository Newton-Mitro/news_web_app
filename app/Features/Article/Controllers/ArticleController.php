<?php

namespace App\Features\Article\Controllers;

use App\Core\Controllers\Controller;
use App\Features\Article\Models\Article;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class ArticleController extends Controller
{
    public function index(){
        $posts = Article::all();
        return Inertia::render('AdminPanel/Article/ListArticles', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPanel/Article/CreateArticle', [
//            'posts' => $posts,
        ]);
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post = new Article();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->user_id = Auth::id(); // Assuming posts are associated with users
        $post->save();

        return redirect()->route('posts.index')->with('status', 'Article created successfully!');
    }

    public function show(Article $post)
    {
        return Inertia::render('AdminPanel/Article/ViewArticle', [
//            'posts' => $posts,
        ]);
    }

    public function edit(Article $post)
    {
        return Inertia::render('AdminPanel/Article/EditArticle', [
//            'posts' => $posts,
        ]);
    }

    public function update(Request $request, Article $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();

        return redirect()->route('posts.index')->with('status', 'Article updated successfully!');
    }

    public function destroy(Article $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('status', 'Article deleted successfully!');
    }
}
