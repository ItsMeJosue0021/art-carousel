<?php

namespace App\Services;

use App\Models\Cart;
use App\Models\Artwork;
use App\Models\ArtMaterial;

class CartService
{
    private $cartItemService;

    public function __construct(CartItemService $cartItemService) {
        $this->cartItemService = $cartItemService;
    }

    public function store($userId) {
        $cart = Cart::create([
            'user_id' => $userId
        ]);
        return $cart;
    }

    public function addToCart($data, $userId) {
        try {
             // check if the user has an active cart
            $cart = $this->activeUserCartExist($userId);

            $item = [
                'product_id' => $data['productId'],
                'product_type' => $data['productType'],
                'quantity' => $data['quantity'] ?? $data['quantity'],
            ];

            // if yes, add the item/product to the said cart
            if ($cart) {
                $this->cartItemService->store($item, $cart->id);
                $cart->total_amount = $this->getTotalAmount($item, $cart);
                $cart->save();
                // return $cart->with('cartItems');
            } else {
                // if none, create a new cart and add the item to it
                $newCart = $this->store($userId);
                $this->cartItemService->store($item, $newCart->id);
                $newCart->total_amount = $this->getTotalAmount($item, $newCart);
                $newCart->save();
                // return $newCart->with('cartItems');
            }
        } catch (\Exception $e) {
            throw new \Exception($e->getMessage());
        }
    }

    public function activeUserCartExist($userId) {
        $cart = Cart::where('user_id', $userId)
                    ->where('status', 'active')
                    ->with('cartItems')
                    ->first();
        return $cart;
    }

    public function getTotalAmount($data, $cart) {
        $totalAmount = 0;
        if ($data['product_type'] == 'artwork') {
            $artwork = Artwork::findOrFail($data['product_id']);
            $totalAmount = $artwork->price + $cart->total_amount;
        } elseif ($data['product_type'] == 'material') {
            $material = ArtMaterial::findOrFail($data['product_id']);
            $itemsTotal = $material->price * $data['quantity'];
            $totalAmount = $itemsTotal + $cart->total_amount;
        }
        return $totalAmount;
    }

}
