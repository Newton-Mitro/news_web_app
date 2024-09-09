<?php

namespace App\Features\View\Models;

use App\Features\NewsArticle\Models\NewsArticle;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    use HasFactory;

    protected $fillable = ['news_article_id', 'view_count'];

    // A view belongs to a post
    public function newsArticle()
    {
        return $this->belongsTo(NewsArticle::class);
    }
}
