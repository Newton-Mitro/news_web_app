<?php

use App\Features\Post\Controllers\PostController;
use Illuminate\Support\Facades\Route;

Route::get('auth/posts', [PostController::class, 'index'])->name('posts.index');
