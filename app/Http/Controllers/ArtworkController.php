<?php

namespace App\Http\Controllers;

use Http;
use App\Models\Artwork;
use Illuminate\Http\Request;
use App\Services\ArtworkService;
use App\Http\Resources\ArtworkResource;
use App\Http\Requests\StoreArtworkRequest;
use Symfony\Component\HttpKernel\Attribute\WithHttpStatus;

class ArtworkController extends Controller
{
    private $artworkService;

    public function __construct(ArtworkService $artworkService) {
        $this->artworkService = $artworkService;
    }

    public function getAllArtwork() {
        $artworks = $this->artworkService->getAllArtwork();
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function storeArtwork(StoreArtworkRequest $request) {
        $artwork = $this->artworkService->storeArtwork( $request->validated());
        return (new ArtworkResource($artwork))
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(201);
    }
}
