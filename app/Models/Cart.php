<?php

namespace App\Models;

use App\Models\User;
use App\Models\Order;
use App\Models\CartItem;
use Illuminate\Database\Eloquent\Model;

class Cart extends Model
{
    protected $fillable = [
        'user_id',
        'status',
        'total_amount',
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }

    public function order() {
        return $this->hasOne(Order::class);
    }

    public function cartItems() {
        return $this->hasMany(CartItem::class);
    }
}
