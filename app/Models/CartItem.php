<?php

namespace App\Models;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;

class CartItem extends Model
{
    protected $fillable = [
        'cart_id',
        'product_id',
        'product_type',
        'quantity'
    ];

    public function cart() {
        return $this->belongsTo(Cart::class);
    }

}
