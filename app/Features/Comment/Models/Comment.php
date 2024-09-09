<?php

namespace App\Features\Comment\Models;

use App\Features\NewsArticle\Models\NewsArticle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['news_article_id', 'content'];

    // A comment belongs to a post
    public function newsArticle()
    {
        return $this->belongsTo(NewsArticle::class);
    }
}
