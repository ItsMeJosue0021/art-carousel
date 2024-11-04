<?php

namespace App\Http\Controllers;

use App\Http\Resources\ArtworkCategoryResource;
use App\Services\ArtworkCategoryService;
use Illuminate\Http\Request;

class ArtworkCategoryController extends Controller
{

    private $artworkCategoryService;

    public function __construct(ArtworkCategoryService $artworkCategoryService) {
        $this->artworkCategoryService = $artworkCategoryService;
    }
    public function getAllArtworkCategory() {
        $categories = $this->artworkCategoryService->getAllArtworkCategory();
        return ArtworkCategoryResource::collection($categories)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }
}
