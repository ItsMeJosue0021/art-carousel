<?php

use App\Http\Controllers\ArtMaterialController;
use App\Http\Controllers\ArtworkCategoryController;
use App\Http\Controllers\ArtworkController;
use App\Http\Controllers\CartController;
use Illuminate\Support\Facades\Route;


Route::controller(ArtworkController::class)->group(function () {
    Route::get('/artworks', 'getAllArtwork');
    Route::get('/artworks/{artworkId}', 'getArtworkById');
    Route::get('/for-approval/artworks', 'getForApprovalArtworks');
    Route::get('/for-sale/artworks', 'getForSaleArtworks');
    Route::get('/sold-out/artworks', 'getSoldOutArtworks');
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
    Route::get('/for-sale/materials', 'allForSale');
    Route::get('/for-approval/materials', 'allForApproval');
    Route::get('/sold-out/materials', 'allSoldOut');
    Route::get('/{id}/materials/for-sale', 'allForSaleByUser');
    Route::get('/{id}/materials/for-approval', 'allForApprovalByUser');
    Route::get('/{id}/materials/sold-out', 'allSoldOutByUser');
    Route::post('/materials', 'store');
    Route::post('/materials/{id}', 'update');
    Route::delete('/materials/{id}', 'delete');
});

Route::controller(CartController::class)->group(function () {
    Route::post('/{id}/add-to-cart', 'addToCart');
});

