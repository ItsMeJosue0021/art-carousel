<?php

namespace App\Http\Controllers;

use App\Http\Requests\UpdateArtMaterialRequest;
use Http;
use Illuminate\Http\Request;
use App\Services\ArtMaterialService;
use App\Http\Resources\ArtMaterialResource;
use App\Http\Requests\StoreArtMertialRequest;

class ArtMaterialController extends Controller
{
    private $artMaterialService;

    public function __construct(ArtMaterialService $artMaterialService) {
        $this->artMaterialService = $artMaterialService;
    }
    public function getAll() {
        $metarials = $this->artMaterialService->getAll();
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function allForSale() {
        $metarials = $this->artMaterialService->allForSale();
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function allForApproval() {
        $metarials = $this->artMaterialService->allForApproval();
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function allSoldOut() {
        $metarials = $this->artMaterialService->allSoldOut();
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function allForSaleByUser($id) {
        $metarials = $this->artMaterialService->allForSaleByUser($id);
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function allForApprovalByUser($id) {
        $metarials = $this->artMaterialService->allForApprovalByUser($id);
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function allSoldOutByUser($id) {
        $metarials = $this->artMaterialService->allSoldOutByUser($id);
        return ArtMaterialResource::collection($metarials)
                ->response()
                ->setStatusCode(200);
    }

    public function store(StoreArtMertialRequest $request) {
        $material = $this->artMaterialService->store($request->validated(), $request->file('image'));
        return (new ArtMaterialResource($material))
                ->response()
                ->setStatusCode(201);
    }

    public function update(UpdateArtMaterialRequest $request, $id) {
        $material = $this->artMaterialService->update($request->validated(), $id, $request->file('image'));
        return (new ArtMaterialResource($material))
                ->response()
                ->setStatusCode(200);
    }

    public function delete($id) {
        $this->artMaterialService->delete($id);
        return response()->json(['message', 'Art Material has been delete.'], 204);
    }
}
