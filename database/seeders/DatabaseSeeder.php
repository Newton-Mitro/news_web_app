<?php

namespace Database\Seeders;

use App\Features\Auth\Models\User;
use Database\Seeders\ArticleSeeder;
use Database\Seeders\CategorySeeder;
use Database\Seeders\PageSeeder;
use Illuminate\Database\Seeder;
use Illuminate\Support\Facades\Hash;
use Illuminate\Support\Str;

// use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class DatabaseSeeder extends Seeder
{
    public function run(): void
    {
        User::factory()->create([
            'name' => 'ওয়েব মাস্টার',
            'email' => 'webmaster@email.com',
            'role' => 'ADMIN',
            'email_verified_at' => now(),
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'status' => 'Active'
        ]);

        User::factory()->create([
            'name' => 'সত্যপরায়ণ',
            'email' => 'article.writer@dcnews.com',
            'email_verified_at' => now(),
            'role' => 'WRITER',
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'status' => 'Active'
        ]);

        User::factory()->create([
            'name' => 'ব্যাঙাচি',
            'email' => 'article.editor@dcnews.com',
            'email_verified_at' => now(),
            'role' => 'EDITOR',
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'status' => 'Active'
        ]);

        User::factory()->create([
            'name' => 'ব্যাঙাচি',
            'email' => 'site.visitor@dcnews.com',
            'email_verified_at' => now(),
            'role' => 'VISITOR',
            'password' => Hash::make('password'),
            'remember_token' => Str::random(10),
            'status' => 'Active'
        ]);

        // User::factory()->count(8)->create();

        $this->call(SettingSeeder::class);
        $this->call(CategorySeeder::class);
        $this->call(ArticleSeeder::class);
        $this->call(PageSeeder::class);
    }
}
