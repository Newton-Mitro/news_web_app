<?php

namespace App\Features\Post\Models;

use App\Features\Category\Models\Category;
use App\Features\Comment\Models\Comment;
use App\Features\Reaction\Models\Reaction;
use App\Features\Tag\Models\Tag;
use App\Features\View\Models\View;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class Post extends Model
{
    use HasFactory;
    use HasUlids;

    protected $fillable = ['title', 'content', 'category_id'];

    // A post belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    // A post can have many tags
    public function tags()
    {
        return $this->belongsToMany(Tag::class);
    }

    // A post can have many comments
    public function comments()
    {
        return $this->hasMany(Comment::class);
    }

    // A post has one view record
    public function view()
    {
        return $this->hasOne(View::class);
    }

    // A post can have many reactions
    public function reactions()
    {
        return $this->hasMany(Reaction::class);
    }
}
