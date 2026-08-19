<?php

namespace App\Features\Page\Requests;

use Illuminate\Foundation\Http\FormRequest;

class StorePageRequest extends FormRequest
{
    public function authorize(): bool
    {
        return true;
    }

    public function rules(): array
    {
        return [
            'title' => 'required|string|max:255',
            'slug' => 'required|string|unique:pages,slug',
            'body' => 'required|string',
            'summery' => 'nullable|string',
            'status' => 'required|in:Draft,Published',
            'attachments.*' => 'file|mimes:jpg,jpeg,png,pdf|max:2048',
        ];
    }
}
