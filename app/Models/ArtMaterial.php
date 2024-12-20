<?php

namespace App\Models;

use App\Models\User;
use App\Models\ProductStatus;
use App\Models\ArtMaterialCategory;
use Illuminate\Database\Eloquent\Model;

class ArtMaterial extends Model
{
    protected $fillable = [
        'name',
        'description',
        'price',
        'art_material_category_id',
        'product_status_id',
        'quantity',
        'user_id',
        'image',
    ];

    public function artMaterialCategory() {
        return $this->belongsTo(ArtMaterialCategory::class);
    }

    public function productStatus() {
        return $this->belongsTo(ProductStatus::class);
    }

    public function user() {
        return $this->belongsTo(User::class);
    }

}
