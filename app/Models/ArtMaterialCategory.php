<?php

namespace App\Models;

use App\Models\ArtMaterial;
use Illuminate\Database\Eloquent\Model;

class ArtMaterialCategory extends Model
{
    protected $fillable = [
        'name'
    ];

    public function artMaterials() {
        return $this->hasMany(ArtMaterial::class);
    }
}
