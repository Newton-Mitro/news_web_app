<?php

namespace App\Features\Tag\Models;

use App\Features\NewsArticle\Models\NewsArticle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // A tag can belong to many posts
    public function newsArticles()
    {
        return $this->belongsToMany(NewsArticle::class);
    }
}
