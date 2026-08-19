<?php

namespace App\Features\Comment\Controller;

use App\Features\Comment\Model\Comment;
use Illuminate\Http\Request;

class CommentController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        //
        dd("index");
    }

    /**
     * Show the form for creating a new resource.
     */
    public function create()
    {
        //
        //
        dd("Create");
    }

    /**
     * Store a newly created resource in storage.
     */
    public function store(Request $request)
    {


        $validated = $request->validate([
            'content' => ['required', 'string', 'max:2000'],
            'article_id' => ['required', 'exists:articles,id'],
        ]);

        $comment = new Comment();

        $comment->article_id = $validated['article_id'];
        $comment->created_by = $request->user()->id;
        $comment->content = $validated['content'];

        return $comment->save();
    }


    public function show(Request $request, string $id)
    {

        $commentLimit = $request->integer('limit', 10);

        $comments = Comment::where('article_id', $id)
            ->with('user')
            ->latest()
            ->take($commentLimit)
            ->get();

        return response()->json([
            'comments' => $comments,
        ]);
    }

    /**
     * Show the form for editing the specified resource.
     */
    public function edit(string $id)
    {
        //
        //
        dd("EDIT");
    }

    /**
     * Update the specified resource in storage.
     */
    public function update(Request $request, string $id)
    {
        //
    }

    /**
     * Remove the specified resource from storage.
     */
    public function destroy(string $id)
    {
        $comment = Comment::findOrFail($id);

        // Comment যেই user তৈরি করেছে,
        // শুধু সেই user-ই delete করতে পারবে
        if ((int) $comment->created_by !== (int) auth()->id()) {
            return response()->json([
                'message' => 'আপনি এই মন্তব্যটি মুছে ফেলতে পারবেন না।',
            ], 403);
        }

        $comment->delete();

        return response()->json([
            'message' => 'মন্তব্য সফলভাবে মুছে ফেলা হয়েছে।',
        ]);
    }
}
