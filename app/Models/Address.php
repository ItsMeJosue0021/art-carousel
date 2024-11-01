<?php

namespace App\Models;

use App\Models\User;
use Illuminate\Database\Eloquent\Model;

class Address extends Model
{
    protected $fillable = [
        'lot',
        'block',
        'street',
        'subdivision',
        'baranggay',
        'city',
        'province',
        'user_id'
    ];

    public function user() {
        return $this->belongsTo(User::class);
    }
}
