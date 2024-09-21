<?php

use Illuminate\Support\Facades\Route;
use App\Features\PublicPage\Controllers\PublicPageController;

Route::get('/', [PublicPageController::class, 'home'])->name('home');
Route::get('news/category/{category}', [PublicPageController::class, 'byCategory'])->name('pages.byCategory');
Route::get('news/tag/{tag}', [PublicPageController::class, 'byTag'])->name('pages.byTag');
Route::get('news/archive', [PublicPageController::class, 'newsArchive'])->name('pages.archive');
