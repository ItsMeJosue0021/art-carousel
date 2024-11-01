<?php

namespace App\Models;

use Illuminate\Database\Eloquent\Model;

class ArtworkCategory extends Model
{
    protected $fillable = [
        'name'
    ];

    public function artworks() {
        return $this->has(Artwork::class);
    }
}
