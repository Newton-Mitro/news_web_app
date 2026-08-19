<?php

use App\Features\User\Controllers\UserController;
use Illuminate\Support\Facades\Route;


Route::prefix('auth')->group(function () {
    Route::get('users', [UserController::class, 'index'])->name('users.index'); // List users
    Route::get('users/create', [UserController::class, 'create'])->name('users.create'); // Create form
    Route::post('users', [UserController::class, 'store'])->name('users.store'); // Store new page
    Route::get('user/profile', [UserController::class, 'show'])->name('users.show'); // Show specific page
    Route::get('users/{id}/edit', [UserController::class, 'edit'])->name('users.edit'); // Edit form
    Route::post('users/{id}', [UserController::class, 'update'])->name('users.update'); // Update page
    Route::delete('users/{id}', [UserController::class, 'destroy'])->name('users.destroy'); // Delete page

    // Custom route for updating page status
    Route::put('users/status/{id}', [UserController::class, 'updateStatus'])->name('users.updateStatus');

    Route::get('users/change-password/{id}', [UserController::class, 'changePassword'])->name('users.changePassword'); 
    Route::post('users/update-password/{id}', [UserController::class, 'updatePassword'])->name('users.updatePassword'); 
});
