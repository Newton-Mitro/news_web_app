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
            'en_name' => $this->faker->unique()->word(),
            'bn_name' => $this->faker->unique()->word(),  // You can replace this with actual Bengali words if needed
            'status' => $this->faker->randomElement(['Published', 'Draft']),
        ];
    }
}
