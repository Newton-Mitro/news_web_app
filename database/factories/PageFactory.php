<?php

namespace Database\Factories;

use Illuminate\Support\Str;
use App\Features\Auth\Models\User;
use App\Features\Page\Models\Page;
use Illuminate\Database\Eloquent\Factories\Factory;

class PageFactory extends Factory
{
    protected $model = Page::class;

    public function definition(): array
    {
        return [
            'title' => $this->faker->sentence(),
            'slug' => Str::slug($this->faker->sentence()),
            'body' => $this->faker->paragraphs(5, true),
            'summery' => $this->faker->paragraph(),
            'status' => $this->faker->randomElement(['Draft', 'Published']),
            'created_by' => User::inRandomOrder()->value('id') ?? User::factory(),
            'updated_by' => User::inRandomOrder()->value('id') ?? User::factory(),
        ];
    }
}
