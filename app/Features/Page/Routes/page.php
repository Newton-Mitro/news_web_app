<?php

use App\Features\Page\Controllers\PageController;
use Illuminate\Support\Facades\Route;

Route::get('news/category/{category}', [PageController::class, 'byCategory'])->name('pages.byCategory');
Route::get('news/tag/{tag}', [PageController::class, 'byTag'])->name('pages.byTag');
Route::get('news/archive', [PageController::class, 'newsArchive'])->name('pages.archive');

