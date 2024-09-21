<?php

namespace App\Features\PublicPage\Controllers;

use App\Features\Article\Models\Article;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class PublicPageController
{
    public function home(): Response
    {
        $sectionOneArticles = Article::with(['attachments', 'category', 'author'])
            ->orderBy("created_at", "desc")
            ->take(7)
            ->get()->toArray();

        $chunks = array_chunk($sectionOneArticles, 3);

        return Inertia::render("Public/Home", [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'sectionOneLeft' => $chunks[0],
            'sectionOneRight' => $chunks[1],
            'sectionOneMiddle' => $chunks[2],
            'phpVersion' => PHP_VERSION,
        ]);
    }
    public function byCategory(string $category): Response
    {
        return Inertia::render('Public/NewsCategory', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }

    public function byTag(string $tag)
    {
        //
    }

    public function newsArchive()
    {
        return Inertia::render('Public/NewsArchive', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'laravelVersion' => Application::VERSION,
            'phpVersion' => PHP_VERSION,
        ]);
    }
}
