<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Features\Article\Models\Article;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class ArticleSeeder extends Seeder
{
    public function run(): void
    {
        Article::factory()->count(50)->create();
    }
}
