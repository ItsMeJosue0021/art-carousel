<?php

use App\Http\Controllers\ArtworkCategoryController;
use App\Http\Controllers\ArtworkController;
use Illuminate\Support\Facades\Route;


Route::controller(ArtworkController::class)->group(function () {
    Route::get('/artworks', 'getAllArtwork');
    Route::post('/artworks', 'storeArtwork');
});

Route::controller(ArtworkCategoryController::class)->group(function () {
    Route::get('/artworks/categories', 'getAllArtworkCategory');
});


