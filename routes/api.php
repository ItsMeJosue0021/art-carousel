<?php

use App\Http\Controllers\ArtMaterialController;
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
    Route::post('/artworks/{artworkId}', 'updateArtwork');
    Route::delete('/artworks/{artworkId}', 'deleteArtwork');
});

Route::controller(ArtworkCategoryController::class)->group(function () {
    Route::get('/artworks-categories', 'getAllArtworkCategory');
});

Route::controller(ArtMaterialController::class)->group(function () {
    Route::get('/materials', 'getAll');
    Route::get('/materials/for-sale', 'allForSale');
    Route::get('/materials/for-approval', 'allForApproval');
    Route::get('/materials/sold-out', 'allSoldOut');
    Route::get('/{id}/materials/for-sale', 'allForSaleByUser');
    Route::get('/{id}/materials/for-approval', 'allForApprovalByUser');
    Route::get('/{id}/materials/sold-out', 'allSoldOutByUser');
    Route::post('/materials', 'store');
    Route::post('/materials/{id}', 'update');
    Route::delete('/materials/{id}', 'delete');
});


