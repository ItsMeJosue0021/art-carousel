<?php

namespace App\Models;

use App\Models\User;
use App\Models\ProductStatus;
use App\Models\ArtMaterialCategory;
use Illuminate\Database\Eloquent\Model;

class Artwork extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'artwork_category_id',
        'product_status_id',
        'user_id',
    ];

    public function category() {
        return $this->belongsTo(ArtMaterialCategory::class);
    }

    public function status() {
        return $this->belongsTo(ProductStatus::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }
}
