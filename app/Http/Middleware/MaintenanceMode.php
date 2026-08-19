<?php

namespace App\Http\Middleware;

use App\Features\Setting\Models\Setting;
use Closure;
use Illuminate\Http\Request;
use Inertia\Inertia;
use Symfony\Component\HttpFoundation\Response;

class MaintenanceMode
{
    /**
     * Handle an incoming request.
     */
    public function handle(Request $request, Closure $next): Response
    {
        // Always allow admin routes
        if ($request->is('admin/*')) {
            return $next($request);
        }

        // Check maintenance mode
        $maintenanceMode = Setting::where('key', 'maintenanceMode')
            ->value('value');

        if ($maintenanceMode === '1') {
            return Inertia::render('under-maintenence')
                ->toResponse($request)
                ->setStatusCode(503);
        }

        return $next($request);
    }
}