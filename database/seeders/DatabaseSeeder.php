<?php

namespace Database\Seeders;

use App\Models\User;
// use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Hash;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;

class DatabaseSeeder extends Seeder
{
    /**
     * Seed the application's database.
     */
    public function run(): void
    {
        $ADMIN = Role::create(['name' => 'admin']);
        $USER = Role::create(['name' => 'user']);

        $admin = User::create([
            'name' => 'Admin User',
            'email' => 'admin@email.com',
            'password' => Hash::make('password'),
        ]);
        $admin->assignRole($ADMIN);

        $user = User::create([
            'name' => 'Regular User',
            'email' => 'user@email.com',
            'password' => bcrypt('password'), ]);
        $user->assignRole($USER);

    }
}
