<?php

namespace App\Features\Category\Models;

use Database\Factories\UserFactory;
use Illuminate\Database\Eloquent\Model;
use App\Features\Article\Models\Article;
use Database\Factories\CategoryFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // A category has many posts
    public function articles()
    {
        return $this->hasMany(Article::class);
    }

    protected static function newFactory()
    {
        return new CategoryFactory;
    }
}
