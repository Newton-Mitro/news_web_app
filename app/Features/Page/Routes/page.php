<?php

use App\Features\Page\Controllers\PageController;
use Illuminate\Support\Facades\Route;


// Route::prefix('auth')->group(function () {
//     Route::resource('pages', PageController::class);
//     Route::put('pages/status/{id}', [PageController::class, 'updateStatus'])->name('pages.updateStatus');
// });

Route::prefix('auth')->group(function () {
    Route::get('pages', [PageController::class, 'index'])->name('pages.index'); // List pages
    Route::get('pages/create', [PageController::class, 'create'])->name('pages.create'); // Create form
    Route::post('pages', [PageController::class, 'store'])->name('pages.store'); // Store new page
    Route::get('pages/{id}', [PageController::class, 'show'])->name('pages.show'); // Show specific page
    Route::get('pages/{id}/edit', [PageController::class, 'edit'])->name('pages.edit'); // Edit form
    Route::post('pages/{id}', [PageController::class, 'update'])->name('pages.update'); // Update page
    Route::delete('pages/{id}', [PageController::class, 'destroy'])->name('pages.destroy'); // Delete page

    // Custom route for updating page status
    Route::put('pages/status/{id}', [PageController::class, 'updateStatus'])->name('pages.updateStatus');
});
