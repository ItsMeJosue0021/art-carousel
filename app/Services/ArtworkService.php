<?php

namespace App\Services;

use App\Models\Artwork;

class ArtworkService
{
    public function getAllArtwork() {
        $artworks = Artwork::all();
        return $artworks;
    }

    public function storeArtwork($artwork, $image) {

        $data = [
            'name' => $artwork['name'],
            'description' => $artwork['description'],
            'price' => $artwork['price'],
            'artwork_category_id' => $artwork['artworkCategoryId'],
            'product_status_id' => 2,
            'user_id' => $artwork['userId'],
        ];

        if ($image) {
            $data['image'] = $image->store('artworks', 'public');
        }

        $createdArtwork = Artwork::create($data);
        return $createdArtwork;
    }
}
