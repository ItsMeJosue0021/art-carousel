<?php

namespace App\Services;

use App\Models\Artwork;

class ArtworkService
{
    public function getAllArtwork() {
        $artworks = Artwork::latest()->paginate(12);
        return $artworks;
    }

    public function getArtworkById($artworkId) {
        $artwork = Artwork::findOrFail($artworkId);
        return $artwork;
    }

    public function getForSaleArtworks() {
        $artworks = Artwork::where('product_status_id', 1)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function getForApprovalArtworks() {
        $artworks = Artwork::where('product_status_id', 2)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function getSoldOutArtworks() {
        $artworks = Artwork::where('product_status_id', 3)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function getForSaleArtworksByUser($userId) {
        $artworks = Artwork::where('user_id', $userId)
                        ->where('product_status_id', 1)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function getForApprovalArtworksByUser($userId) {
        $artworks = Artwork::where('user_id', $userId)
                        ->where('product_status_id', 2)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function getSoldOutArtworksByUser($userId) {
        $artworks = Artwork::where('user_id', $userId)
                        ->where('product_status_id', 3)
                        ->latest()
                        ->paginate(12);
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

    public function updateArtwork($data, $id, $newImage) {
        $artwork = Artwork::findOrFail($id);

        $artwork->update([
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'artwork_category_id' => $data['artworkCategoryId'],
        ]);

        if ($newImage) {
            $artwork->image = $newImage->store('artworks', 'public');
            $artwork->save();
        }

        return $artwork;
    }

    public function deleteArtwork($id) {
        $artwork = Artwork::findOrFail($id);
        $artwork->delete();
    }
}
