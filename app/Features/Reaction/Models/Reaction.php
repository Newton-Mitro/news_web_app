<?php

namespace App\Features\Reaction\Models;

use App\Features\NewsArticle\Models\NewsArticle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{
    use HasFactory;

    protected $fillable = ['news_article_id', 'type', 'count'];

    // A reaction belongs to a post
    public function newsArticle()
    {
        return $this->belongsTo(NewsArticle::class);
    }
}
