<?php

namespace App\Features\Comment\Models;

use App\Features\Post\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Comment extends Model
{
    use HasFactory;

    protected $fillable = ['post_id', 'content'];

    // A comment belongs to a post
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
