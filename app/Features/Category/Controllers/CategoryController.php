<?php

namespace App\Features\Category\Controllers;

use App\Core\Controllers\Controller;
use App\Features\Category\Models\Category;
use Illuminate\Http\Request;
use Inertia\Inertia;

class CategoryController extends Controller
{
    public function index()
    {
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = Category::where('name', 'like', "%{$searchText}%")
            ->orderBy('created_at', 'desc')
            ->paginate($recordPerPage);

        return Inertia::render('AdminPanel/Category/ListCategories', [
            'response' => $response,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPanel/Category/CreateCategory');
    }

    public function store(Request $request)
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name',
            'status' => 'required|in:Published,Draft',
        ]);

        $category = new Category();
        $category->name = $request->name;
        $category->status = $request->status;
        $category->save();

        return redirect()->route('categories.index')->with('success', 'Category created successfully!');
    }

    public function show(int $id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('AdminPanel/Category/ViewCategory', [
            'category' => $category,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function edit(int $id)
    {
        $category = Category::findOrFail($id);
        return Inertia::render('AdminPanel/Category/EditCategory', [
            'category' => $category,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function update(Request $request, int $id)
    {
        $request->validate([
            'name' => 'required|string|unique:categories,name',
        ]);

        $category = Category::findOrFail($id);
        $category->name = $request->name;
        $category->save();

        return redirect()->back()->with('success', 'Category updated successfully!');
    }

    public function destroy(int $id)
    {
        $category = Category::findOrFail($id);
        $category->delete();

        return redirect()->route('categories.index')->with('success', 'Category deleted successfully!');
    }

    public function updateStatus(Category $category, int $id)
    {
        $category_2 = Category::findOrFail($id);
        if ($category_2->status === 'Published') {
            $category_2->status = 'Draft';
        } else {
            $category_2->status = 'Published';
        }
        $category_2->save();

        return redirect()->back()->with('success', 'Category status updated to ' . $category_2->status . '!');
    }
}
