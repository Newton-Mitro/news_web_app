<?php

use App\Features\Auth\Controllers\ProfileController;
use App\Features\Comment\Controller\CommentController;
use App\Features\Dashboard\Controllers\DashboardController;
use App\Features\Setting\Controller\SettingController;
use App\Features\Visitor\Controllers\VisitorController;
use Illuminate\Support\Facades\Route;
use Illuminate\Support\Facades\Artisan;



Route::middleware(['auth', 'verified'])->group(function () {
    Route::get('/dashboard', [DashboardController::class, 'index'])
        ->name('dashboard');
});

Route::middleware('auth')->group(function (): void {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
    Route::resource('visitors', VisitorController::class);
});

Route::get('comments/{comment}', [CommentController::class, 'show'])
    ->name('comments.show');


Route::get('/getConfiguration', [
    SettingController::class,
    'PublicConfiguration'
])->name('public.configuration');



Route::get('setup', function () {
    Artisan::call('migrate:fresh', ['--force' => true]);
    Artisan::call('db:seed', ['--force' => true]);
    Artisan::call('config:clear');
    Artisan::call('cache:clear');
    Artisan::call('route:clear');
    Artisan::call('view:clear');
    Artisan::call('optimize:clear');

    return response()->json(['message' => 'Migrations and seeding have been successfully executed.']);
});

require __DIR__ . '/../app/Features/Auth/Routes/auth.php';
require __DIR__ . '/../app/Features/PublicPage/Routes/public_page.php';
require __DIR__ . '/../app/Features/Article/Routes/article.php';
require __DIR__ . '/../app/Features/Page/Routes/page.php';
require __DIR__ . '/../app/Features/User/Routes/user.php';
require __DIR__ . '/../app/Features/Category/Routes/category.php';
require __DIR__ . '/../app/Features/Gallery/Routes/gallery.php';
require __DIR__ . '/../app/Features/Setting/Routes/settingRoute.php';
require __DIR__ . '/../app/Features/Publication/Routes/publication.php';
require __DIR__ . '/../app/Features/Comment/Routes/comment.php';
