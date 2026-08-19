<?php

namespace App\Features\Article\Models;

use App\Features\Attachment\Models\Attachment;
use App\Features\Auth\Models\User;
use Database\Factories\ArticleFactory;
use Illuminate\Database\Eloquent\Model;
use App\Features\Category\Models\Category;
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


    public function attachments()
    {
        return $this->morphMany(Attachment::class, 'attachable');
    }


    protected static function newFactory()
    {
        return new ArticleFactory;
    }
}
