<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Features\Category\Models\Category;

class CategorySeeder extends Seeder
{
    public function run(): void
    {
        Category::factory()->create([
            'name' => 'National',
            'name_bn' => 'জাতীয়',
            'show_in_menu' => true,
            'order' => 0,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'International ',
            'name_bn' => 'আন্তর্জাতিক',
            'show_in_menu' => true,
            'order' => 1,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Dhaka Credit',
            'name_bn' => 'ঢাকা ক্রেডিট',
            'show_in_menu' => true,
            'order' => 2,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Cooperative',
            'name_bn' => 'সমবায়',
            'show_in_menu' => true,
            'order' => 3,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Feature',
            'name_bn' => 'ফিচার',
            'show_in_menu' => true,
            'order' => 4,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Community',
            'name_bn' => 'কমিউনিটি',
            'show_in_menu' => true,
            'order' => 5,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Sports',
            'name_bn' => 'খেলাধুলা',
            'show_in_menu' => true,
            'order' => 6,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Opinion',
            'name_bn' => 'মতামত',
            'show_in_menu' => true,
            'order' => 7,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Children\'s Party',
            'name_bn' => 'ছোটদের আসর',
            'show_in_menu' => true,
            'order' => 8,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Women\'s arena',
            'name_bn' => 'নারী অঙ্গন',
            'show_in_menu' => true,
            'order' => 9,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Science and Technology',
            'name_bn' => 'বিজ্ঞান ও প্রযুক্তি',
            'show_in_menu' => true,
            'order' => 10,
            'status' => 'Published',
        ]);

        Category::factory()->create([
            'name' => 'Art and Literature',
            'name_bn' => 'শিল্প ও সাহিত্য',
            'show_in_menu' => true,
            'order' => 11,
            'status' => 'Published',
        ]);
    }
}
