<?php

namespace App\Services;

use App\Models\CartItem;

class CartItemService
{
    public function store($data, $cartId) {
        $item = CartItem::create([
            'cart_id' => $cartId,
            'product_id' => $data['product_id'],
            'product_type' => $data['product_type'],
            'quantity' => $data['quantity'] ?? $data['quantity'],
        ]);
    }
}
