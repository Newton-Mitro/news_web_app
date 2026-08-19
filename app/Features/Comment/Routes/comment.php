<?php

use App\Features\Comment\Controller\CommentController;
use Illuminate\Support\Facades\Route;


Route::middleware('auth')->group(function (): void {
    // Route::resource('comments', CommentController::class);

    Route::post('comments', [CommentController::class, 'store'])
        ->name('comments.store');

    Route::delete('comments/{comment}', [CommentController::class, 'destroy'])
        ->name('comments.destroy');
});
