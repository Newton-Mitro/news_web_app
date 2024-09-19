<?php

namespace Database\Factories;

use App\Features\Article\Models\Article;
use App\Features\Attachment\Models\Attachment;
use Illuminate\Database\Eloquent\Factories\Factory;

class AttachmentFactory extends Factory
{
    protected $model = Attachment::class;

    public function definition(): array
    {
        return [
            'name' => $this->faker->word . '.' . $this->faker->fileExtension,
            'path' => $this->faker->filePath(),
            'url' => $this->faker->url,
            'mime' => $this->faker->mimeType,
            'article_id' => Article::inRandomOrder()->first()->id,
        ];
    }
}
