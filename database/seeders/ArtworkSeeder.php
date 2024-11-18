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
            'name' => 'Eternal Bloom',
            'description' => 'A vibrant explosion of florals, Eternal Bloom captures the everlasting beauty of nature in full bloom. Each petal is meticulously detailed, reflecting the artists dedication to capturing lifes fleeting moments.',
            'price' => 2500.00,
            'artwork_category_id' => 1,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Luminous Horizon',
            'description' => 'This captivating seascape portrays the first light of dawn breaking over a tranquil ocean. The interplay of light and shadow creates a luminous horizon that evokes feelings of peace and hope.',
            'price' => 3000.00,
            'artwork_category_id' => 2,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Whispers of the Past',
            'description' => 'A nostalgic journey through time, Whispers of the Past features a collage of vintage objects and memories. The muted color palette and intricate details invite viewers to reflect on their own histories.',
            'price' => 1500.00,
            'artwork_category_id' => 3,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Urban Pulse',
            'description' => 'The heartbeat of the city is captured in Urban Pulse, where dynamic lines and bold colors depict the energy and chaos of urban life. Its a celebration of the vibrant spirit that defines metropolitan landscapes.',
            'price' => 2500.00,
            'artwork_category_id' => 1,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Mystic Forest',
            'description' => 'This captivating seascape portrays the first light of dawn breaking over a tranquil ocean. The interplay of light and shadow creates a luminous horizon that evokes feelings of peace and hope.',
            'price' => 3000.00,
            'artwork_category_id' => 2,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Celestial Dreams',
            'description' => 'A nostalgic journey through time, Whispers of the Past features a collage of vintage objects and memories. The muted color palette and intricate details invite viewers to reflect on their own histories.',
            'price' => 1500.00,
            'artwork_category_id' => 3,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Harmony in Chaos',
            'description' => 'The heartbeat of the city is captured in Urban Pulse, where dynamic lines and bold colors depict the energy and chaos of urban life. Its a celebration of the vibrant spirit that defines metropolitan landscapes.',
            'price' => 2500.00,
            'artwork_category_id' => 1,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Golden Reverie',
            'description' => 'This captivating seascape portrays the first light of dawn breaking over a tranquil ocean. The interplay of light and shadow creates a luminous horizon that evokes feelings of peace and hope.',
            'price' => 3000.00,
            'artwork_category_id' => 2,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Echoes of Time',
            'description' => 'A nostalgic journey through time, Whispers of the Past features a collage of vintage objects and memories. The muted color palette and intricate details invite viewers to reflect on their own histories.',
            'price' => 1500.00,
            'artwork_category_id' => 3,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Vibrant Mirage',
            'description' => 'The heartbeat of the city is captured in Urban Pulse, where dynamic lines and bold colors depict the energy and chaos of urban life. Its a celebration of the vibrant spirit that defines metropolitan landscapes.',
            'price' => 2500.00,
            'artwork_category_id' => 1,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Desert Oasis',
            'description' => 'This captivating seascape portrays the first light of dawn breaking over a tranquil ocean. The interplay of light and shadow creates a luminous horizon that evokes feelings of peace and hope.',
            'price' => 3000.00,
            'artwork_category_id' => 2,
            'product_status_id' => 2,
            'user_id' => 2
        ]);

        Artwork::create([
            'name' => 'Silent Symphony',
            'description' => 'A nostalgic journey through time, Whispers of the Past features a collage of vintage objects and memories. The muted color palette and intricate details invite viewers to reflect on their own histories.',
            'price' => 1500.00,
            'artwork_category_id' => 3,
            'product_status_id' => 2,
            'user_id' => 2
        ]);
    }
}
