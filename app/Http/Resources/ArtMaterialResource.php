<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use Illuminate\Http\Resources\Json\JsonResource;

class ArtMaterialResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'id' => $this->id,
            'name' => $this->name,
            'description' => $this->description,
            'price' => $this->price,
            'artMaterialCategoryId' => $this->art_material_category_id,
            'categoryName' => $this->artMaterialCategory->name,
            'quantity' => $this->quantity,
            'productStatusId' => $this->product_status_id,
            'productStatusName' => $this->productStatus->name,
            'userId' => $this->user_id,
            'image' => $this->image,
            'created_at' => Carbon::parse($this->created_at)->format('F j, Y'),
            'updated_at' => Carbon::parse($this->updated_at)->format('F j, Y'),
        ];
    }
}
