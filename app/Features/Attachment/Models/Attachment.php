<?php

namespace App\Features\Attachment\Models;

use Illuminate\Database\Eloquent\Model;
use App\Features\Article\Models\Article;
use Database\Factories\AttachmentFactory;
use Illuminate\Database\Eloquent\Relations\BelongsTo;
use Illuminate\Database\Eloquent\Factories\HasFactory;

class Attachment extends Model
{
    use HasFactory;

    protected $fillable = [
        'name',
        'path',
        'url',
        'mime',
        'article_id'
    ];

    public function article(): BelongsTo
    {
        return $this->belongsTo(Article::class);
    }

    protected static function newFactory()
    {
        return new AttachmentFactory;
    }
}
