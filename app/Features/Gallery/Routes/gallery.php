<?php

use App\Features\Gallery\Controller\GalleryController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::resource('gallery', GalleryController::class);
});
