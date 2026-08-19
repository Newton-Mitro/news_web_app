<?php

use Illuminate\Database\Migrations\Migration;
use Illuminate\Database\Schema\Blueprint;
use Illuminate\Support\Facades\Schema;

return new class extends Migration {
    public function up(): void
    {
        Schema::create('articles', function (Blueprint $table) {
            $table->id();
            $table->text('title');
            $table->text('slug');
            $table->longText('body');
            $table->text('summery')->nullable();
            $table->string('tags')->nullable();
            $table->string('video_url')->nullable();
            $table->enum('status', ['Draft', 'Published', 'Archived'])->default('Draft');
            $table->enum('article_type', ['Image', 'Video', 'Text'])->default('Image');
            $table->boolean('featured')->default(false);
            $table->integer('view_count')->default(0);
            $table->foreignId('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreignId('created_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('updated_by')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('articles');
    }
};
