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
            $table->string('slug')->unique();
            $table->longText('content');
            $table->text('excerpt')->nullable();
            $table->string('attachment_url', 1024)->nullable();
            $table->string('attachment_mime')->nullable();
            $table->enum('status', ['draft', 'published'])->default('draft');
            $table->enum('post_type', ['image', 'video'])->default('image');
            $table->boolean('featured')->default(false);
            $table->foreignId('category_id')->references('id')->on('categories')->onDelete('cascade');
            $table->foreignId('created_by')->references('id')->on('users')->onDelete('cascade');
            $table->foreignId('updated_by')->references('id')->on('users')->onDelete('cascade');
            $table->timestamps();
        });
    }

    public function down(): void
    {
        Schema::dropIfExists('posts');
    }
};
