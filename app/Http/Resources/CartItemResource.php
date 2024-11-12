<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use App\Models\Artwork;
use App\Models\ArtMaterial;
use Illuminate\Http\Request;
use App\Http\Resources\ArtworkResource;
use App\Http\Resources\ArtMaterialResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CartItemResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        $product = null;
        if ($this->product_type == 'artwork') {
            $artwork = Artwork::findOrFail($this->product_id);
            $product = new ArtworkResource($artwork);
        } elseif ($this->product_type == 'material') {
            $material = ArtMaterial::findOrFail($this->product_id);
            $product = new ArtMaterialResource($material);
        }

        return [
            'id' => $this->id,
            'product' => $product,
            'product_type' => $this->product_type,
            'quantity' => $this->quantity,
            'created_at' => Carbon::parse($this->created_at)->format('F j, Y'),
            'updated_at' => Carbon::parse($this->updated_at)->format('F j, Y'),
        ];
    }
}
