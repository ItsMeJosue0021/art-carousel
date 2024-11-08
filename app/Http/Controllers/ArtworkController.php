<?php

namespace App\Http\Controllers;

use Http;
use App\Models\Artwork;
use Illuminate\Http\Request;
use App\Services\ArtworkService;
use App\Http\Resources\ArtworkResource;
use App\Http\Requests\StoreArtworkRequest;
use App\Http\Requests\UpdateArtworkRequest;
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

    public function getArtworkById($artworkId) {
        $artwork = $this->artworkService->getArtworkById($artworkId);
        return (new ArtworkResource($artwork))
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function getForSaleArtworks() {
        $artworks = $this->artworkService->getForSaleArtworks();
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function getForApprovalArtworks() {
        $artworks = $this->artworkService->getForApprovalArtworks();
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function getSoldOutArtworks() {
        $artworks = $this->artworkService->getSoldOutArtworks();
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function getForSaleArtworksByUser($userId) {
        $artworks = $this->artworkService->getForSaleArtworksByUser($userId);
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function getSoldOutArtworksByUser($userId) {
        $artworks = $this->artworkService->getSoldOutArtworksByUser($userId);
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function getForApprovalArtworksByUser($userId) {
        $artworks = $this->artworkService->getForApprovalArtworksByUser($userId);
        return ArtworkResource::collection($artworks)
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function storeArtwork(StoreArtworkRequest $request) {
        $artwork = $this->artworkService->storeArtwork( $request->validated(), $request->file('image'));
        return (new ArtworkResource($artwork))
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(201);
    }

    public function updateArtwork(UpdateArtworkRequest $request, $artworkId) {
        $artwork = $this->artworkService->updateArtwork(
            $request->validated(),
            $artworkId,
            $request->file('newImage')
        );

        return (new ArtworkResource($artwork))
                ->response()
                ->header('Content-Type', 'application/json')
                ->setStatusCode(200);
    }

    public function deleteArtwork($id) {
        $this->artworkService->deleteArtwork($id);
        return response()->json(['message', 'The artwork has been deleted.'], 204);
    }
}
