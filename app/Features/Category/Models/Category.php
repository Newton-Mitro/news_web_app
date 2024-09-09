<?php

namespace App\Features\Category\Models;

use App\Features\NewsArticle\Models\NewsArticle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // A category has many posts
    public function newsArticles()
    {
        return $this->hasMany(NewsArticle::class);
    }
}
