<?php

namespace App\Features\Article\UseCases\Queries\GetArticles;



class GetArticlesQuery
{
    public function __construct(
        protected readonly int $page_size = 10,
        protected readonly int $page = 1,
        protected readonly string $search_text = "",
    ) {}
}
