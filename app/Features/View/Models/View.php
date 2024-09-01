<?php

namespace App\Features\View\Models;

use App\Features\Post\Models\Post;
use Illuminate\Database\Eloquent\Factories\HasFactory;
use Illuminate\Database\Eloquent\Model;

class View extends Model
{
    use HasFactory;

    protected $fillable = ['post_id', 'view_count'];

    // A view belongs to a post
    public function post()
    {
        return $this->belongsTo(Post::class);
    }
}
