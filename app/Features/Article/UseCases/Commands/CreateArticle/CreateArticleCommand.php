<?php

namespace App\Features\Article\UseCases\Commands\CreateArticle;


class CreateArticleCommand
{
    public function __construct(
        protected readonly int $category_id,
        protected readonly int $created_by,
        protected readonly int $updated_by,
        protected readonly string $title,
        protected readonly string $slug,
        protected readonly string $content,
        protected readonly bool $featured = false,
        protected readonly ?string $summery = null,
    ) {}
}
