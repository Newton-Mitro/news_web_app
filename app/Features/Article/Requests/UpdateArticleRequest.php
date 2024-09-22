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
        // Assuming the article ID is passed in the URL
        $articleId = $this->route('article'); // Adjust if your route parameter is different

        return [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:posts,slug,' . $articleId,
            'content' => 'required|string',
            'summery' => 'nullable|string',
            'video_url' => 'nullable|url',
            'featured' => 'boolean',
            'category_id' => 'required|exists:categories,id',
        ];
    }
}
