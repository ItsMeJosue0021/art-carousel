<?php

use App\Http\Controllers\ArtworkController;
use Illuminate\Support\Facades\Route;

// Route::prefix('api')->group(function () {

    Route::controller(ArtworkController::class)->group(function () {
        Route::get('/artworks', 'getAllArtwork');
        Route::post('/artworks', 'storeArtwork');
    });

// });
