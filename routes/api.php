<?php

use App\Features\Auth\Controllers\ProfileController;
use App\Features\PublicPage\Controllers\PublicPageController;
use Illuminate\Foundation\Application;
use Illuminate\Support\Facades\Artisan;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;



Route::get('more/articles/{category}', [PublicPageController::class, 'moreByCategory'])->name('public.moreByCategory');