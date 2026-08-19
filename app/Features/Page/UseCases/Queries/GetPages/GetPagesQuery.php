<?php

namespace App\Features\Page\UseCases\Queries\GetPages;



class GetPagesQuery
{
    public function __construct(
        protected readonly int $page_size = 10,
        protected readonly int $page = 1,
        protected readonly string $search_text = "",
    ) {}
}
