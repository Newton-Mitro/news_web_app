<?php

namespace App\Features\PublicPage\Controllers;


use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class PublicPageController
{
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
