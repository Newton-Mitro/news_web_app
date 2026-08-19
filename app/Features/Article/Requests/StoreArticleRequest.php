<?php

namespace App\Features\Article\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StoreArticleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:articles,slug',
            'body' => 'required|string',
            'summery' => 'nullable|string',
            'video_url' => 'nullable|url',
            'status' => 'required|in:Draft,Published',
            'category_id' => 'required|exists:categories,id',
            'article_type' => 'required|in:Image,Video,Text',
            'attachments.*' => 'file|mimes:jpg,jpeg,png,pdf|max:2048',
        ];
    }
}
