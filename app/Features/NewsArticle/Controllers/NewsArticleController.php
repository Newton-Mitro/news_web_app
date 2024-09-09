<?php

namespace App\Features\NewsArticle\Controllers;

use App\Core\Controllers\Controller;
use App\Features\NewsArticle\Models\NewsArticle;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class NewsArticleController extends Controller
{
    public function index(){
        $posts = NewsArticle::all();
        return Inertia::render('AdminPanel/NewsArticle/ListNewsArticles', [
            'posts' => $posts,
        ]);
    }

    public function create()
    {
        return view('posts.create'); // Create this view
    }

    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post = new NewsArticle();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->user_id = Auth::id(); // Assuming posts are associated with users
        $post->save();

        return redirect()->route('posts.index')->with('status', 'NewsArticle created successfully!');
    }

    public function show(NewsArticle $post)
    {
        return view('posts.show', compact('post')); // Create this view
    }

    public function edit(NewsArticle $post)
    {
        return view('posts.edit', compact('post')); // Create this view
    }

    public function update(Request $request, NewsArticle $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();

        return redirect()->route('posts.index')->with('status', 'NewsArticle updated successfully!');
    }

    public function destroy(NewsArticle $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('status', 'NewsArticle deleted successfully!');
    }
}
