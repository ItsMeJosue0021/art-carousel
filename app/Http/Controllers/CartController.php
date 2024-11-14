<?php

namespace App\Http\Controllers;

use App\Http\Requests\AddToCartRequest;
use App\Http\Resources\CartResource;
use App\Services\CartService;
use Illuminate\Http\Request;

class CartController extends Controller
{
    private $cartService;

    public function __construct(CartService $cartService)
    {
        $this->cartService = $cartService;
    }

    public function addToCart(AddToCartRequest $request, $userId)
    {
        try {
            $this->cartService->addToCart($request->validated(), $userId);
            return response()->json(['message' => 'Item has been added to cart.'], 200);
        } catch (\Exception $e) {
            return response()->json(['error' => $e->getMessage()], 500);
        }
    }
}
