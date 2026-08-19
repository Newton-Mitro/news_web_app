<?php

namespace App\Features\Page\Requests;

use Illuminate\Foundation\Http\FormRequest;

class UpdatePageRequest extends FormRequest
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
            'attachments.*' => 'file|mimes:jpg,jpeg,png,pdf|max:2048',
        ];
    }
}
