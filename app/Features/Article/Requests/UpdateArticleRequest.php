<?php

namespace App\Features\Article\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdateArticleRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'body' => 'required|string',
            'summery' => 'nullable|string',
            'video_url' => 'nullable|url',
            'category_id' => 'required|exists:categories,id',
            'attachments.*' => 'file|mimes:jpg,jpeg,png,pdf|max:2048',
        ];
    }
}
