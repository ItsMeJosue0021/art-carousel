<?php

namespace App\Models;

use App\Models\Cart;
use Illuminate\Database\Eloquent\Model;

class Order extends Model
{
    protected $fillable = [
        'user_id',
        'cart_id',
        'total_amount',
        'status'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function cart() {
        return $this->belongsTo(Cart::class);
    }
}
