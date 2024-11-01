<?php

namespace Database\Seeders;

use App\Models\User;
use Illuminate\Database\Seeder;
use Spatie\Permission\Models\Role;
use Illuminate\Support\Facades\Hash;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class UserSeeder extends Seeder
{
    /**
     * Run the database seeds.
     */
    public function run(): void
    {
        $ADMIN = Role::create(['name' => 'admin']);
        $USER = Role::create(['name' => 'user']);
        $CLERK = Role::create(['name' => 'clerk']);

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

        $user = User::create([
            'name' => 'Clerk User',
            'email' => 'clerk@email.com',
            'password' => bcrypt('password'), ]);
        $user->assignRole($CLERK);
    }
}
