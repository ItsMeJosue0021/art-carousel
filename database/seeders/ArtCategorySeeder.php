<?php

namespace Database\Seeders;

use App\Models\ArtworkCategory;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ArtCategorySeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArtworkCategory::create(['name' => 'Painting']);
        ArtworkCategory::create(['name' => 'Drawing']);
        ArtworkCategory::create(['name' => 'Photography']);
        ArtworkCategory::create(['name' => 'Poetry']);
    }
}
