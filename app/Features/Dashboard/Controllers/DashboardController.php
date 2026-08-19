<?php

namespace App\Features\Dashboard\Controllers;

use App\Core\Controllers\Controller;
use App\Features\Article\Models\Article;
use App\Features\Auth\Models\User;
use App\Features\Category\Models\Category;
use App\Features\Page\Models\Page;
use App\Features\Visitor\Models\Visitor;
use Carbon\Carbon;
use Inertia\Inertia;

class DashboardController extends Controller
{
    public function index()
    {
        $stats = [
            'draft_articles' => Article::where('status', 'Draft')->count(),
            'published_articles' => Article::where('status', 'Published')->count(),
            'archived_articles' => Article::where('status', 'Archived')->count(),

            'categories' => Category::count(),
            'pages' => Page::count(),
            'users' => User::count(),
            'visitors' => Visitor::count(),
        ];

        // Last 30 days
        $dailyVisitors = collect();

        for ($i = 29; $i >= 0; $i--) {
            $date = Carbon::today()->subDays($i);

            $dailyVisitors->push([
                'date' => $date->format('M d'),
                'count' => Visitor::whereDate('created_at', $date)->count(),
            ]);
        }

        // Last 12 months
        $monthlyVisitors = collect();

        for ($i = 11; $i >= 0; $i--) {
            $month = Carbon::now()->subMonths($i);

            $monthlyVisitors->push([
                'month' => $month->format('M'),
                'count' => Visitor::whereYear('created_at', $month->year)
                    ->whereMonth('created_at', $month->month)
                    ->count(),
            ]);
        }

        return Inertia::render('Dashboard', [
            'stats' => $stats,
            'dailyVisitors' => $dailyVisitors,
            'monthlyVisitors' => $monthlyVisitors,
        ]);
    }
}