<?php

namespace App\Features\Post\Controllers;

use App\Core\Controllers\Controller;
use App\Features\Post\Models\Post;
use Illuminate\Foundation\Application;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Auth;
use Inertia\Inertia;

class PostController extends Controller
{
    public function index(){
        $posts = Post::all();
        return Inertia::render('AdminPanel/Post/ListPosts', [
            'posts' => $posts,
        ]);
    }
    // Show the form to create a new post
    public function create()
    {
        return view('posts.create'); // Create this view
    }

    // Store a newly created post in storage
    public function store(Request $request)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post = new Post();
        $post->title = $request->title;
        $post->body = $request->body;
        $post->user_id = Auth::id(); // Assuming posts are associated with users
        $post->save();

        return redirect()->route('posts.index')->with('status', 'Post created successfully!');
    }

    // Display the specified post
    public function show(Post $post)
    {
        return view('posts.show', compact('post')); // Create this view
    }

    // Show the form to edit the specified post
    public function edit(Post $post)
    {
        return view('posts.edit', compact('post')); // Create this view
    }

    // Update the specified post in storage
    public function update(Request $request, Post $post)
    {
        $request->validate([
            'title' => 'required|string|max:255',
            'body' => 'required|string',
        ]);

        $post->title = $request->title;
        $post->body = $request->body;
        $post->save();

        return redirect()->route('posts.index')->with('status', 'Post updated successfully!');
    }

    // Remove the specified post from storage
    public function destroy(Post $post)
    {
        $post->delete();

        return redirect()->route('posts.index')->with('status', 'Post deleted successfully!');
    }
}
