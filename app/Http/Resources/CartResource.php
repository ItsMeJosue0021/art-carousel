<?php

namespace App\Http\Resources;

use Carbon\Carbon;
use Illuminate\Http\Request;
use App\Http\Resources\CartItemResource;
use Illuminate\Http\Resources\Json\JsonResource;

class CartResource extends JsonResource
{
    /**
     * Transform the resource into an array.
     *
     * @return array<string, mixed>
     */
    public function toArray(Request $request): array
    {
        return [
            'user_id' => $this->user_id,
            'status' => $this->status,
            'total_amount' => $this->total_amount,
            'cart_items' => CartItemResource::collection($this->whenLoaded('cartItems')),
            'created_at' => Carbon::parse($this->created_at)->format('F j, Y'),
            'updated_at' => Carbon::parse($this->updated_at)->format('F j, Y'),
        ];
    }
}
