<?php

namespace Database\Seeders;

use App\Models\ArtMaterialCategory;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtMaterialCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArtMaterialCategory::create(['name' => 'Acrylic']);
        ArtMaterialCategory::create(['name' => 'Canvas Brushes']);
        ArtMaterialCategory::create(['name' => 'Charcoal']);
        ArtMaterialCategory::create(['name' => 'Erasers']);
        ArtMaterialCategory::create(['name' => 'Oil Paint']);
        ArtMaterialCategory::create(['name' => 'Pastel']);
    }
}
