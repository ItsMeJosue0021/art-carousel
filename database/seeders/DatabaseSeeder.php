<?php

namespace Database\Seeders;

use Hash;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use Database\Seeders\UserSeeder;
use Database\Seeders\ArtworkSeeder;
use Database\Seeders\ArtCategorySeeder;
use Database\Seeders\ProductStatusSeeder;
use Database\Seeders\ArtMaterialCategorySeeder;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
       $this->call(UserSeeder::class);
       $this->call(ArtCategorySeeder::class);
       $this->call(ArtMaterialCategorySeeder::class);
       $this->call(ProductStatusSeeder::class);
       $this->call(ArtworkSeeder::class);

    }
}
