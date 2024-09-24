<?php

use App\Features\Article\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::resource('articles', ArticleController::class);
    Route::put('articles/status/{id}', [ArticleController::class, 'updateStatus'])->name('articles.updateStatus');
});
