<?php

namespace App\Features\Reaction\Models;

use App\Features\Article\Models\Article;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{
    use HasFactory;

    protected $fillable = ['article_id', 'type', 'count'];

    // A reaction belongs to a post
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
