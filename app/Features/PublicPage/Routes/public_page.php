<?php

use App\Http\Middleware\MaintenanceMode;
use Illuminate\Support\Facades\Route;
use App\Features\PublicPage\Controllers\PublicPageController;

Route::middleware(MaintenanceMode::class)->group(function () {
    Route::get('public/categories', [PublicPageController::class, 'publicCategories'])->name('public.publicCategories');

    Route::get('/', [PublicPageController::class, 'home'])->name('public.home');
    Route::get('category/articles/{category}', [PublicPageController::class, 'byCategory'])->name('public.byCategory');

    Route::get('articles/archive', [PublicPageController::class, 'articlesArchive'])->name('public.archive');
    Route::get('articles/filter/archive', [PublicPageController::class, 'archive'])->name('public.filterArchive');
    Route::get('articles/headlines', [PublicPageController::class, 'getHeadlines'])->name('public.getHeadlines');
    Route::get('articles/view/{id}', [PublicPageController::class, 'view'])->name('public.viewArticle');

    Route::get('about', [PublicPageController::class, 'about'])->name('public.about');
    Route::get('contact', [PublicPageController::class, 'contact'])->name('public.contact');
    Route::get('privacy-policy', [PublicPageController::class, 'privacyPolicy'])->name('public.privacyPolicy');
    Route::get('terms-of-use', [PublicPageController::class, 'termsOfUse'])->name('public.termsOfUse');
    Route::get('reprint-policy', [PublicPageController::class, 'reprintPolicy'])->name('public.reprintPolicy');
    Route::get('advertisement', [PublicPageController::class, 'advertisement'])->name('public.advertisement');

    Route::get('public/publication', [PublicPageController::class, 'publication'])->name('public.publication');
});