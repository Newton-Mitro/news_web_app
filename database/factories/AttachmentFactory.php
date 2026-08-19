<?php

namespace Database\Factories;

use App\Features\Page\Models\Page;
use App\Features\Article\Models\Article;
use App\Features\Attachment\Models\Attachment;
use Illuminate\Database\Eloquent\Factories\Factory;

class AttachmentFactory extends Factory
{
    protected $model = Attachment::class;

    public function definition(): array
    {
        $randomImages = [
            'https://t4.ftcdn.net/jpg/09/37/12/73/360_F_937127370_RzigoTq55hhV6TOcnRXbZ2kBjSOgWUMJ.jpg',
            'https://png.pngtree.com/thumb_back/fh260/background/20230519/pngtree-landscape-jpg-wallpapers-free-download-image_2573540.jpg',
            'https://upload.wikimedia.org/wikipedia/commons/a/a5/Red_Kitten_01.jpg',
            'https://static.vecteezy.com/system/resources/thumbnails/054/417/919/small_2x/majestic-white-horses-galloping-in-a-golden-field-at-sunset-free-photo.jpeg',
            'https://cfcdn.apowersoft.info/astro/picwish/_astro/safety-img.BwCePVDJ.png',
            'https://static.vecteezy.com/system/resources/thumbnails/036/095/160/small_2x/ai-generated-a-anime-style-boy-with-brown-hair-photo.jpg',
            'https://static.vecteezy.com/system/resources/thumbnails/036/619/658/small/ai-generated-young-girl-in-fur-coat-with-intense-gaze-ai-generative-photo.jpg',
            'https://t3.ftcdn.net/jpg/10/07/91/82/360_F_1007918246_tWgO9cnv2CRhzxFh6OJbNz3eSfnt4bpT.jpg',
            'https://t4.ftcdn.net/jpg/08/96/00/25/360_F_896002558_mceLiovJ6P27l60jLvpQPhasVY2jSoj4.jpg',
            'https://png.pngtree.com/thumb_back/fh260/background/20230527/pngtree-old-classic-car-art-in-the-woods-17-jpg-files-in-image_2671047.jpg',
            'https://img.freepik.com/premium-photo/couple-having-date-night_23-2149218359.jpg?semt=ais_hybrid'
        ];

        return [
            'name' => $this->faker->word . '.' . $this->faker->fileExtension,
            'path' => $this->faker->filePath(),
            'url' => $randomImages[rand(0, 10)],
            'mime' => $this->faker->mimeType,
            'attachable_id' => $this->faker->numberBetween(1, 10), // Replace with the range of your data
            'attachable_type' => $this->faker->randomElement([
                Article::class,
                Page::class,
            ]),
        ];
    }
}
