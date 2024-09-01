<?php

namespace App\Features\Tag\Models;

use App\Features\Post\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Tag extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // A tag can belong to many posts
    public function posts()
    {
        return $this->belongsToMany(Post::class);
    }
}
