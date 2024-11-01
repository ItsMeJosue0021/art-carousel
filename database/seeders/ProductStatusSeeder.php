<?php

namespace Database\Seeders;

use App\Models\ProductStatus;
use Illuminate\Database\Seeder;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ProductStatusSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        ProductStatus::create(['name' => 'For Sale']);
        ProductStatus::create(['name' => 'For Approval']);
        ProductStatus::create(['name' => 'Sold Out']);
    }
}
