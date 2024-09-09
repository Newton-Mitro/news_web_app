<?php

use App\Features\NewsArticle\Controllers\NewsArticleController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::resource('news-article', NewsArticleController::class);
});
