<?php

use Illuminate\Support\Facades\Route;
use App\Features\Category\Controllers\CategoryController;

Route::resource('categories', CategoryController::class);
