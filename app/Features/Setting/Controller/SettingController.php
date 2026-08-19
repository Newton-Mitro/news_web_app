<?php

namespace App\Features\Setting\Controller;

use App\Features\Setting\Models\Setting;
use Illuminate\Http\Request;
use Inertia\Inertia;

class SettingController
{
    /**
     * Display a listing of the resource.
     */
    public function index()
    {
        $settings = Setting::pluck('value', 'key')->toArray();
        return Inertia::render('AdminPanel/Settings/configuration', [
            'settings' => $settings
        ]);
    }
    public function update(Request $request, string $id)
    {
        //
        $validated = $request->validate([
            'editor_Email' => 'required|string|max:255',
            'advertize_Email' => 'required|email|max:255',
            'infoEmail' => 'nullable|string|max:255',
            'maintenanceMode' => 'nullable|boolean',
            'facebook' => 'nullable|string|max:255',
            'twitter' => 'nullable|string|max:255',
            'instagram' => 'nullable|string|max:255',
            'messenger' => 'nullable|string|max:255',
            'youtube' => 'nullable|string|max:255',
            'whatsapp' => 'nullable|string|max:255',
            'address' => 'nullable|string|max:255',
            'phone' => 'nullable|string|max:255',
        ]);

        $validated['maintenanceMode'] =
            !empty($validated['maintenanceMode']) ? '1' : '0';

        foreach ($validated as $key => $value) {
            Setting::updateOrCreate(
                ['key' => $key],
                ['value' => $value]
            );
        }

        return back()->with(
            'success',
            'Configuration updated successfully.'
        );
    }

    public function PublicConfiguration()
    {

        $settings = Setting::get();

        return response()->json([
            'success' => true,
            'data' => $settings,
        ]);
    }
}
