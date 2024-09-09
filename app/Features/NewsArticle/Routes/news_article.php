<?php

use App\Features\NewsArticle\Controllers\NewsArticleController;
use Illuminate\Support\Facades\Route;

Route::get('auth/news-article', [NewsArticleController::class, 'index'])->name('news-article.index');
