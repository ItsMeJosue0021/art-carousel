<?php

namespace Database\Seeders;

use App\Models\Artwork;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ArtworkSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        Artwork::create([
            'name' => 'Abstract Sunrise',
            'description' => 'A beautiful abstract painting of a sunrise.',
            'price' => 250.00,
            'artwork_category_id' => 1,
            'product_status_id' => 1,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Modern Landscape',
            'description' => 'A modern take on landscape art.',
            'price' => 300.00,
            'artwork_category_id' => 2,
            'product_status_id' => 1,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Classic Portrait',
            'description' => 'An elegant portrait in classic style.',
            'price' => 150.00,
            'artwork_category_id' => 3,
            'product_status_id' => 1,
            'user_id' => 2
        ]);
    }
}
