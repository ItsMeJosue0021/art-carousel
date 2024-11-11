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
            'name' =>'Sample 1',
            'description' => 'Description for sample 1',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 1,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 2',
            'description' => 'Description for sample 2',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 1,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 3',
            'description' => 'Description for sample 3',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 1,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 4',
            'description' => 'Description for sample 4',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 5',
            'description' => 'Description for sample 5',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 6',
            'description' => 'Description for sample 6',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 2,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 7',
            'description' => 'Description for sample 7',
            'price' => 1000,
            'art_material_category_id' => 1,
            'product_status_id' => 3,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 8',
            'description' => 'Description for sample 8',
            'price' => 1100,
            'art_material_category_id' => 2,
            'product_status_id' => 3,
            'quantity' => 3,
            'user_id' => 2
        ]);

        ArtMaterial::create([
            'name' =>'Sample 9',
            'description' => 'Description for sample 9',
            'price' => 1200,
            'art_material_category_id' => 3,
            'product_status_id' => 3,
            'quantity' => 3,
            'user_id' => 2
        ]);
    }
}
