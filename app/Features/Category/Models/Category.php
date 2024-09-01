<?php

namespace App\Features\Category\Models;

use App\Features\Post\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Category extends Model
{
    use HasFactory;

    protected $fillable = ['name'];

    // A category has many posts
    public function posts()
    {
        return $this->hasMany(Post::class);
    }
}
