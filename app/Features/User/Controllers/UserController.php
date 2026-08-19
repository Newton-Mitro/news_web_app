<?php

namespace App\Features\User\Controllers;

use App\Features\Auth\Models\User;
use App\Features\User\Requests\StoreUserRequest;
use App\Features\User\Requests\UpdatePasswordRequest;
use App\Features\User\Requests\UpdateUserRequest;
use Illuminate\Support\Facades\DB;
use Illuminate\Support\Facades\Hash;
use Inertia\Inertia;

class UserController
{
    public function index()
    {
        $recordPerPage = request()->filled('record_per_page') ? request()->query('record_per_page') : 10;
        $searchText = request()->filled('search_text') ? request()->query('search_text') : '';
        $response = User::where('name', 'like', "%{$searchText}%")
            ->orderBy('created_at', 'desc')
            ->paginate($recordPerPage);

        return Inertia::render('AdminPanel/User/ListUsers', [
            'response' => $response,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function create()
    {
        return Inertia::render('AdminPanel/User/CreateUser');
    }

    public function store(StoreUserRequest $request)
    {
        DB::beginTransaction(); // Start the transaction

        try {
            $userId = auth()->id();

            // Create a new User
            $user = new User();
            $user->name = $request->name;
            $user->email = $request->email;
            $user->status = $request->status;
            $user->email_verified_at = now();
            $user->password = Hash::make('password');
            $user->save();


            DB::commit(); // Commit the transaction if all operations succeed

            return redirect()->route('users.index')->with('success', 'User created successfully!');
        } catch (\Exception $e) {
            DB::rollBack(); // Rollback the transaction on failure

            dd($e);

            return redirect()->back()->withErrors('Failed to create the user. Please try again.');
        }
    }

    public function show()
    {
        $userId = auth()->id();
        $user = User::findOrFail($userId);
        return Inertia::render('AdminPanel/User/UserProfile', [
            'user' => $user,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function edit(int $id)
    {
        $user = User::findOrFail($id);
        return Inertia::render('AdminPanel/User/EditUser', [
            'user' => $user,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function update(UpdateUserRequest $request, int $id)
    {
        DB::beginTransaction();

        try {
            // Find the user
            $user = User::findOrFail($id);

            // Update user properties
            $user->update([
                'name' => $request->name,
                'email' => $request->email,
            ]);

            DB::commit();

            return redirect()->back()->with('success', 'User updated successfully!');
        } catch (\Exception $e) {
            DB::rollBack();
            report($e);

            return redirect()->back()->with('error', 'An error occurred while updating the user.');
        }
    }

    public function destroy(int $id)
    {
        $foundPage = User::findOrFail($id);
        $foundPage->delete();

        return redirect()->route('users.index')->with('success', 'User deleted successfully!');
    }

    public function updateStatus(User $user, int $id)
    {
        $foundPage = User::findOrFail($id);
        if ($foundPage->status === 'Active') {
            $foundPage->status = 'Inactive';
        } else {
            $foundPage->status = 'Active';
        }
        $foundPage->save();

        return redirect()->back()->with('success', 'User ' . $foundPage->status . ' successfully!');
    }

    public function changePassword(int $id)
    {
        $userId = auth()->id();
        $user = User::findOrFail($id);
        return Inertia::render('AdminPanel/User/ChangePassword', [
            'user' => $user,
            'flash' => [
                'success' => session('success'),
            ],
        ]);
    }

    public function updatePassword(UpdatePasswordRequest $request, int $id)
    {
        $userId = auth()->id();
        if ($userId === $id || $id ===1) {
            DB::beginTransaction();

            try {
                // Find the user
                $user = User::findOrFail($id);

                $user->update([
                    'password' => Hash::make($request->password),
                ]);

                DB::commit();

                return redirect()->back()->with('success', 'Password updated successfully!');
            } catch (\Exception $e) {
                DB::rollBack();
                report($e);

                return redirect()->back()->with('error', 'An error occurred while updating the user.');
            }
        } else {
            return redirect()->back()->with('error', 'An error occurred while updating the user.');
        }
    }
}
