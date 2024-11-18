<?php

namespace Database\Seeders;

use App\Models\ArtMaterial;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;

class ArtMaterialSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ArtMaterial::create([
            'name' =>'Acrylic Paints',
            'description' => 'Versatile and quick-drying, ideal for a wide range of techniques',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Oil Paints',
            'description' => 'Known for their rich texture and slow drying time, allowing for detailed blending',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' => 'Watercolors',
            'description' => 'Perfect for transparent and layered effects in paintings.',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Graphite Pencils',
            'description' => 'Essential for sketching and detailed drawings',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Charcoal',
            'description' => 'Great for creating strong, expressive lines and deep shadows',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Colored Pencils',
            'description' => 'Ideal for vibrant, detailed artwork.',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Pastels',
            'description' => 'Available in soft, hard, and oil varieties, offering rich color application',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Ink Pens',
            'description' => 'Used for precise lines and inking, available in various tip sizes and styles.',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Canvas',
            'description' => 'Common surface for painting with oils and acrylics',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sketchbooks',
            'description' => 'Portable books for drawing, sketching, and jotting down ideas.',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Brushes',
            'description' => 'Available in various shapes and sizes for different painting techniques.',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Palette Knives',
            'description' => 'Used for mixing paints and applying thick layers of paint in a textured manner',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);
    }
}
