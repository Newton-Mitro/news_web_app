<?php

use App\Features\Article\Controllers\ArticleController;
use Illuminate\Support\Facades\Route;


// Route::prefix('auth')->group(function () {
//     Route::resource('articles', ArticleController::class);
//     Route::put('articles/status/{id}', [ArticleController::class, 'updateStatus'])->name('articles.updateStatus');
// });

Route::prefix('auth')->group(function () {
    Route::get('articles', [ArticleController::class, 'index'])->name('articles.index'); // List articles
    Route::get('articles/create', [ArticleController::class, 'create'])->name('articles.create'); // Create form
    Route::post('articles', [ArticleController::class, 'store'])->name('articles.store'); // Store new article
    Route::get('articles/{id}', [ArticleController::class, 'show'])->name('articles.show'); // Show specific article
    Route::get('articles/{id}/edit', [ArticleController::class, 'edit'])->name('articles.edit'); // Edit form
    Route::post('articles/{id}', [ArticleController::class, 'update'])->name('articles.update'); // Update article
    Route::delete('articles/{id}', [ArticleController::class, 'destroy'])->name('articles.destroy'); // Delete article

    // Custom route for updating article status
    Route::put('articles/status/{id}', [ArticleController::class, 'updateStatus'])->name('articles.updateStatus');
});
