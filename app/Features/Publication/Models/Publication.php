<?php

namespace App\Features\Publication\Models;

use Illuminate\Database\Eloquent\Model;
use Illuminate\Support\Facades\Storage;

class Publication extends Model
{
    //
    protected $fillable = ['title', 'slug', 'publish_date', 'attachment_path'];

    protected $appends = [
        'attachment_url',
    ];

    public function getAttachmentUrlAttribute(): ?string
    {
        if (!$this->attachment_path) {
            return null; // or return default avatar
        }

        return Storage::disk('public')->url($this->attachment_path);
    }
}
