<?php

namespace App\Features\Article\Models;

use App\Features\Attachment\Models\Attachment;
use App\Features\Tag\Models\Tag;
use App\Features\Auth\Models\User;
use App\Features\View\Models\View;
use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use App\Features\Comment\Models\Comment;
use App\Features\Category\Models\Category;
use App\Features\Reaction\Models\Reaction;
use Illuminate\Database\Eloquent\Concerns\HasUlids;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Article extends Model
{
    use HasFactory;

    protected $fillable = ['title', 'content', 'category_id'];

    // A post belongs to a category
    public function category()
    {
        return $this->belongsTo(Category::class);
    }

    public function author()
    {
        return $this->belongsTo(User::class, 'created_by');
    }

    public function updater()
    {
        return $this->belongsTo(User::class, 'updated_by');
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

    public function attachments()
    {
        return $this->hasMany(Attachment::class);
    }


    protected static function newFactory()
    {
        return new ArticleFactory;
    }
}
