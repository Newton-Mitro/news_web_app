<?php

namespace App\Features\Reaction\Models;

use App\Features\Post\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Reaction extends Model
{
    use HasFactory;

    protected $fillable = ['post_id', 'type', 'count'];

    // A reaction belongs to a post
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
