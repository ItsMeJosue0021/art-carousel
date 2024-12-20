<?php

use App\Http\Controllers\PageController;
use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;
use App\Http\Controllers\UserPageController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'userRole' => Auth::user() ? Auth::user()->getRoleNames()->first() : null
    ]);
})->name('welcome');

Route::controller(PageController::class)->group(function () {
    Route::get('/gallery', 'gallery')->name('gallery');
    Route::get('/materials', 'materials')->name('materials');
    Route::get('/community', 'community')->name('community');
    Route::get('/exhibit', 'exhibit')->name('exhibit');
});

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified', 'role:user'])->group(function () {
    Route::prefix('u')->controller(UserPageController::class)->group(function () {
        Route::get('/dashboard', 'dashboard')->name('user.dashboard');
        Route::get('/artworks', 'artworks')->name('user.artworks');
        Route::get('/materials', 'materials')->name('user.materials');
        Route::get('/orders', 'orders')->name('user.orders');
    });
});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::prefix('a')->controller(AdminController::class)->group(function () {
        Route::get('/dashboard', 'dashboard')->name('admin.dashboard');
        Route::get('/artworks', 'artworks')->name('admin.artworks');
        Route::get('/materials', 'materials')->name('admin.materials');
        Route::get('/orders', 'orders')->name('admin.orders');
        Route::get('/artists', 'artists')->name('admin.artists');
    });
});



require __DIR__ . '/auth.php';
