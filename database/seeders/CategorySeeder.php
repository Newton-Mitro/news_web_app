<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Features\Category\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::factory()->count(5)->create();
    }
}
