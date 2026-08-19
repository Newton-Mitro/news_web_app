<?php

namespace App\Features\PublicPage\Controllers;

use App\Features\Article\Models\Article;
use App\Features\Category\Models\Category;
use App\Features\Gallery\Models\Gallery;
use App\Features\Page\Models\Page;
use App\Features\Publication\Models\Publication;
use Illuminate\Http\Request;
use Illuminate\Support\Facades\Route;
use Inertia\Inertia;
use Inertia\Response;

class PublicPageController
{


    public function publicCategories()
    {
        $response = Category::where('status', 'Published')
            ->orderBy('order', 'asc') // Primary sorting by 'order'
            ->orderBy('created_at', 'desc') // Fallback sorting by 'created_at'
            ->get();

        return $response;
    }


    public function view($id)
    {
        $article = Article::with(['attachments', 'category', 'author'])
            ->findOrFail($id);

        $key = 'article_viewed_' . $article->id;

        if (!session()->has($key)) {
            $article->increment('view_count');
            session()->put($key, true);
        }

        return Inertia::render('Public/SingleArticle', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'article' => $article,
        ]);
    }

    public function getHeadlines()
    {
        $articles = Article::where('status', 'Published')
            ->orderBy('created_at', 'desc')
            ->take(5)
            ->get();

        return $articles;
    }

    public function home(): Response
    {
        // Fetch the first 7 articles and chunk them into groups of 3
        $latestArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderBy('created_at', 'desc')
            ->take(8)
            ->get();

        $trendingNow = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderBy('view_count', 'desc')
            ->take(5)
            ->get();


        // Fetch articles under the 'Economy' category
        $dcArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderBy("created_at", "desc")
            ->whereHas('category', function ($query) {
                $query->where('name', 'Dhaka Credit');
            })
            ->take(5)
            ->get();

        // Fetch articles under the 'Economy' category
        $globalArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderBy("created_at", "desc")
            ->whereHas('category', function ($query) {
                $query->where('name', 'International');
            })
            ->take(5)
            ->get();

        // Fetch articles under the 'Economy' category
        $nationalArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderBy("created_at", "desc")
            ->whereHas('category', function ($query) {
                $query->where('name', 'National');
            })
            ->take(5)
            ->get();

        $communityArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderBy("created_at", "desc")
            ->whereHas('category', function ($query) {
                $query->where('name', 'Community');
            })
            ->take(5)
            ->get();

        $galley = Gallery::all();

        // Prepare data for Inertia render
        return Inertia::render("Public/HomePage/Home", [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'latestArticles' => $latestArticles->toArray() ?? [], // Convert collection to array
            'trendingNow' => $trendingNow->toArray() ?? [],
            'dcArticles' => $dcArticles->toArray() ?? [], // Convert collection to array
            'globalArticles' => $globalArticles->toArray() ?? [], // Convert collection to array
            'nationalArticles' => $nationalArticles->toArray() ?? [], // Convert collection to array
            'communityArticles' => $communityArticles->toArray() ?? [], // Convert collection to array
            'galleryData' => $galley
        ]);
    }

    public function byCategory(Request $request, string $category): Response
    {
        $perPage = 10;

        $category = Category::where('name', $category)->first();

        abort_if(!$category, 404);

        $latestNews = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->where('category_id', $category->id)
            ->latest()
            ->paginate($perPage)
            ->withQueryString();

        // Most viewed articles
        $popularArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->where('category_id', $category->id)
            ->orderByDesc('view_count')
            ->take(5)
            ->get();

        return Inertia::render('Public/NewsCategory', [
            'latestNews' => $latestNews,
            'popularArticles' => $popularArticles->toArray() ?? [],
            'category' => $category,
        ]);
    }

    public function moreByCategory(Request $request, string $category)
    {
        $perPage = 10; // Articles per page
        $categoryFounded = Category::where('name', $category)->first();

        if (!$categoryFounded) {
            return redirect()->route('home')->withErrors(['error' => 'Category not found.']);
        }

        $articles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->where('category_id', $categoryFounded->id) // Use the category ID directly
            ->orderBy('created_at', 'desc')
            ->paginate($perPage);

        return $articles;
    }



    public function articlesArchive(): Response
    {
        return Inertia::render('Public/ArticlesArchive', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
        ]);
    }

    public function archive(Request $request)
    {
        // Retrieve filters from the request
        $search = $request->input('search', '');
        $year = $request->input('year', '');
        $month = $request->input('month', '');
        $day = $request->input('day', '');
        $categoryId = $request->input('category', '');
        $page = $request->input('page', 1);


        // Build query for articles
        $query = Article::query();

        // Filter by search keyword
        if ($search) {
            $query->where('title', 'like', '%' . $search . '%')
                ->orWhere('body', 'like', '%' . $search . '%');
        }

        // Filter by year
        if ($year) {
            $query->whereYear('created_at', $year);
        }

        // Filter by month
        if ($month) {
            $query->whereMonth('created_at', $month);
        }

        // Filter by day
        if ($day) {
            $query->whereDay('created_at', $day);
        }

        // Filter by category
        if ($categoryId) {
            $query->where('category_id', $categoryId);
        }

        // Get the filtered articles with pagination, including attachments, category, and author
        $articles = $query->with(['category', 'author', 'attachments']) // Load category, author, and attachments
            ->orderByDesc('created_at') // Order by newest first
            ->paginate(21); // You can adjust the pagination as needed

        // Fetch all categories for filter dropdown
        $categories = Category::all();

        // Return the filtered articles and categories as JSON response
        return response()->json([
            'articles' => $articles,
            'categories' => $categories
        ]);
    }

    public function about(): Response
    {
        $page = Page::where('slug', 'about')->first();
        return Inertia::render('Public/OtherPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'page' => $page
        ]);
    }

    public function contact(): Response
    {
        $page = Page::where('slug', 'contact')->first();
        return Inertia::render('Public/OtherPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'page' => $page
        ]);
    }

    public function privacyPolicy(): Response
    {
        $page = Page::where('slug', 'privacy-policy')->first();
        return Inertia::render('Public/OtherPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'page' => $page
        ]);
    }

    public function termsOfUse(): Response
    {
        $page = Page::where('slug', 'terms-of-use')->first();
        return Inertia::render('Public/OtherPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'page' => $page
        ]);
    }

    public function reprintPolicy(): Response
    {
        $page = Page::where('slug', 'reprint-policy')->first();
        return Inertia::render('Public/OtherPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'page' => $page
        ]);
    }

    public function advertisement(): Response
    {
        $page = Page::where('slug', 'advertisement')->first();
        return Inertia::render('Public/OtherPage', [
            'canLogin' => Route::has('login'),
            'canRegister' => Route::has('register'),
            'page' => $page
        ]);
    }

    public function PublicConfiguration()
    {
        return response()->json([
            'success' => true,
            'message' => 'Configuration API working',
        ]);
    }

    public function publication()
    {

        $popularArticles = Article::with(['attachments', 'category', 'author'])
            ->where('status', 'Published')
            ->orderByDesc('view_count')
            ->take(5)
            ->get();
        $allPublication = Publication::all();


        return Inertia::render('Public/Publication/Publication', [
            'publication' => $allPublication,
            'popularArticles' => $popularArticles,
        ]);
    }
}
