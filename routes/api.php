<?php

use App\Http\Controllers\ArtworkCategoryController;
use App\Http\Controllers\ArtworkController;
use Illuminate\Support\Facades\Route;


Route::controller(ArtworkController::class)->group(function () {
    Route::get('/artworks', 'getAllArtwork');
    Route::get('/artworks/{artworkId}', 'getArtworkById');
    Route::get('/artworks/for-approval', 'getForApprovalArtworks');
    Route::get('/artworks/for-sale', 'getForSaleArtworks');
    Route::get('/artworks/sold-out', 'getSoldOutArtworks');
    Route::get('/{userId}/artworks/for-approval', 'getForApprovalArtworksByUser');
    Route::get('/{userId}/artworks/for-sale', 'getForSaleArtworksByUser');
    Route::get('/{userId}/artworks/sold-out', 'getSoldOutArtworksByUser');
    Route::post('/artworks', 'storeArtwork');
    Route::put('/artworks/{artworkId}', 'updateArtwork');
});

Route::controller(ArtworkCategoryController::class)->group(function () {
    Route::get('/artworks-categories', 'getAllArtworkCategory');
});


