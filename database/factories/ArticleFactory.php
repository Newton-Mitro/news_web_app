<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Features\Auth\Models\User;
use App\Features\Article\Models\Article;
use App\Features\Category\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class ArticleFactory extends Factory
{
    protected $model = Article::class;

    public function definition(): array
    {
        return [
            'uuid' => (string) Str::uuid(),
            'title' => $this->faker->sentence(),
            'slug' => Str::slug($this->faker->sentence()),
            'body' => $this->faker->paragraphs(5, true),
            'summery' => $this->faker->paragraph(),
            'status' => $this->faker->randomElement(['Draft', 'Published']),
            'featured' => $this->faker->boolean(),
            'tags' => $this->faker->words(1, true),
            'category_id' => Category::factory(),
            'created_by' => User::factory(),
            'updated_by' => User::factory(),
        ];
    }
}
