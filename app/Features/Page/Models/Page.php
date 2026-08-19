<?php

namespace App\Features\Page\Models;

use App\Features\Attachment\Models\Attachment;
use App\Features\Auth\Models\User;
use Illuminate\Database\Eloquent\Model;
use App\Features\Category\Models\Category;
use Database\Factories\PageFactory;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Page extends Model
{
    use HasFactory;

    protected $table = 'pages';
    
    protected $fillable = ['title', 'body'];

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
        return new PageFactory();
    }
}
