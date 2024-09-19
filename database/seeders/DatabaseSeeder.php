<?php

namespace Database\Seeders;

use Illuminate\Support\Str;
use Illuminate\Database\Seeder;
use App\Features\Auth\Models\User;
use Database\Seeders\ArticleSeeder;
use Database\Seeders\CategorySeeder;
use Illuminate\Support\Facades\Hash;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory(4)->create();

        User::factory()->create([
            'name' => 'John Doe',
            'email' => 'super.admin@email.com',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
        ]);
        $this->call(CategorySeeder::class);
        $this->call(ArticleSeeder::class);
        $this->call(AttachmentSeeder::class);
    }
}
