<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration
{
    public function up(): void
    {
        Schema::create('posts', function (Blueprint $table) {
            $table->uuid('id')->primary();
            $table->string('title');
            $table->string('slug');
            $table->longText('body');
            $table->text('summary')->nullable();
            $table->string('image_url', 1024)->nullable();
            $table->string('video_url', 1024)->nullable();
            $table->enum('status', ['draft', 'published'])->default('published');
            $table->enum('post_type', ['image', 'video'])->default('image');
            $table->boolean('featured')->default(false);
            $table->integer('views')->default(0);
            $table->integer('reactions')->default(0);
            $table->integer('comments')->default(0);
            $table->foreignId('post_category_id')->references('id')->on('post_categories')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
