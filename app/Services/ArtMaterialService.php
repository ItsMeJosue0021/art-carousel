<?php

namespace App\Services;

use App\Models\ArtMaterial;

class ArtMaterialService
{
    public function getAll() {
        $materials = ArtMaterial::latest()->paginate(12);
        return $materials;
    }

    public function allForSale() {
        $materials = ArtMaterial::where('product_status_id', 1)
                                ->latest()
                                ->paginate(12);
        return $materials;
    }

    public function allForApproval() {
        $materials = ArtMaterial::where('product_status_id', 2)
                                ->latest()
                                ->paginate(12);
        return $materials;
    }

    public function allSoldOut() {
        $materials = ArtMaterial::where('product_status_id', 3)
                                ->latest()
                                ->paginate(12);
        return $materials;
    }

    public function allForSaleByUser($userId) {
        $artworks = ArtMaterial::where('user_id', $userId)
                        ->where('product_status_id', 1)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function allForApprovalByUser($userId) {
        $artworks = ArtMaterial::where('user_id', $userId)
                        ->where('product_status_id', 2)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function allSoldOutByUser($userId) {
        $artworks = ArtMaterial::where('user_id', $userId)
                        ->where('product_status_id', 3)
                        ->latest()
                        ->paginate(12);
        return $artworks;
    }

    public function store($data, $image) {
        $fields = [
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'art_material_category_id' => $data['artMaterialCategoryId'],
            'product_status_id' => 2,
            'quantity' => $data['quantity'],
            'user_id' => $data['userId'],
        ];

        if ($image) {
            $fields['image'] = $image->store('materials', 'public');
        }

        $material = ArtMaterial::create($fields);
        return $material;
    }

    public function update($data, $id, $image) {
        $material = ArtMaterial::findOrFail($id);

        $material->update([
            'name' => $data['name'],
            'description' => $data['description'],
            'price' => $data['price'],
            'art_material_category_id' => $data['artMaterialCategoryId'],
            'quantity' => $data['quantity'],
        ]);

        if ($image) {
            $material->image = $image->store('artworks', 'public');
            $material->save();
        }

        return $material;
    }

    public function delete($id) {
        $material = ArtMaterial::findOrFail($id);
        $material->delete();
    }
}
