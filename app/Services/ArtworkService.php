<?php

namespace App\Services;

use App\Models\Artwork;

class ArtworkService
{
    public function getAllArtwork() {
        $artworks = Artwork::all();
        return $artworks;
    }

    public function storeArtwork($artwork) {

        $data = [
            'name' => $artwork['name'],
            'description' => $artwork['description'],
            'price' => $artwork['price'],
            'artwork_category_id' => $artwork['artworkCategoryId'],
            'product_status_id' => $artwork['productStatusId'],
            'user_id' => $artwork['userId'],
        ];

        $createdArtwork = Artwork::create($data);
        return $createdArtwork;
    }
}
