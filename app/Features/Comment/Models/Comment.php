<?php

namespace App\Features\Comment\Models;

use App\Features\Article\Models\Article;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['article_id', 'content'];

    // A comment belongs to a post
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
