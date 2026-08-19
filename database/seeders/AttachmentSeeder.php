<?php

namespace Database\Seeders;

use App\Features\Article\Models\Article;
use App\Features\Attachment\Models\Attachment;
use App\Features\Page\Models\Page;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;
use Illuminate\Database\Seeder;
use PHPUnit\Framework\TestStatus\Notice;

class AttachmentSeeder extends Seeder
{
    public function run(): void
    {
        // Create 50 attachments for Articles
        Attachment::factory()
            ->count(3150)
            ->sequence(fn($sequence) => [
                'attachable_type' => Article::class,
                'attachable_id' => $sequence->index  + 1,
            ])
            ->create();

        // Create 50 attachments for Pages
        Attachment::factory()
            ->count(150)
            ->sequence(fn($sequence) => [
                'attachable_type' => Page::class,
                'attachable_id' => $sequence->index  + 1,
            ])
            ->create();
    }
}
