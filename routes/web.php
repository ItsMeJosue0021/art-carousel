<?php

use Inertia\Inertia;
use Illuminate\Support\Facades\Route;
use Illuminate\Foundation\Application;
use App\Http\Controllers\AdminController;
use App\Http\Controllers\ProfileController;

Route::get('/', function () {
    return Inertia::render('Welcome', [
        'canLogin' => Route::has('login'),
        'canRegister' => Route::has('register'),
        'laravelVersion' => Application::VERSION,
        'phpVersion' => PHP_VERSION,
        'userRole' => Auth::user() ? Auth::user()->getRoleNames()->first() : null
    ]);
});

Route::get('/dashboard', function () {
    return Inertia::render('Dashboard');
})->middleware(['auth', 'verified'])->name('dashboard');

Route::middleware('auth')->group(function () {
    Route::get('/profile', [ProfileController::class, 'edit'])->name('profile.edit');
    Route::patch('/profile', [ProfileController::class, 'update'])->name('profile.update');
    Route::delete('/profile', [ProfileController::class, 'destroy'])->name('profile.destroy');
});

Route::middleware(['auth', 'verified', 'role:admin'])->group(function () {
    Route::get('/admin', [AdminController::class, 'index'])->name('admin.dashboard');
});



// Route::group(['middleware' => ['role:admin']], function() {
//     Route::get('/admin', [AdminController::class, 'index']);
// });

// Route::group(['middleware' => ['role:seller']], function() {
//     Route::get('/seller', [SellerController::class, 'index']);
// });

// Route::group(['middleware' => ['role:customer']], function() {
//     Route::get('/customer', [CustomerController::class, 'index']);
// });

require __DIR__ . '/auth.php';
