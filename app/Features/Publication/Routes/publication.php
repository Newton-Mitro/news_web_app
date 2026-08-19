<?php

use App\Features\Publication\Controller\PublicationController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::resource('publication', PublicationController::class);
});
