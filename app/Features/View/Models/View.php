<?php

namespace App\Features\View\Models;

use App\Features\Article\Models\Article;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    use HasFactory;

    protected $fillable = ['article_id', 'view_count'];

    // A view belongs to a post
    public function article()
    {
        return $this->belongsTo(Article::class);
    }
}
