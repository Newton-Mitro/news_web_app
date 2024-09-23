<?php

namespace Database\Factories;

use App\Features\Category\Models\Category;
use Illuminate\Database\Eloquent\Factories\Factory;

class CategoryFactory extends Factory
{
    protected $model = Category::class;


    public function definition(): array
    {
        return [
            'name' => $this->faker->unique()->word(),
            'status' => $this->faker->randomElement(['Published', 'Draft']),
        ];
    }
}
