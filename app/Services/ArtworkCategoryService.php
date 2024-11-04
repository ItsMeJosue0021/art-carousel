<?php

namespace App\Services;

use App\Models\ArtworkCategory;

class ArtworkCategoryService
{
    public function getAllArtworkCategory() {
        $artworkCategories = ArtworkCategory::all();
        return $artworkCategories;
    }
}
