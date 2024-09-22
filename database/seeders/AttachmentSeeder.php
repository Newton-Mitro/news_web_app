<?php

namespace Database\Seeders;

use Illuminate\Database\Seeder;
use App\Features\Attachment\Models\Attachment;
use Illuminate\Database\Console\Seeds\WithoutModelEvents;

class AttachmentSeeder extends Seeder
{
    public function run(): void
    {
        Attachment::factory()->count(150)->create();
    }
}
