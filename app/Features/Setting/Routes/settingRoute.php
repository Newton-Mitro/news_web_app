<?php

use App\Features\Setting\Controller\SettingController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::resource('setting', SettingController::class);
});
