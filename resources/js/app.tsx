import './bootstrap';
import '../css/app.css';

import { createRoot, hydrateRoot } from 'react-dom/client';
import { createInertiaApp } from '@inertiajs/react';
import { resolvePageComponent } from 'laravel-vite-plugin/inertia-helpers';

const appName = import.meta.env.VITE_APP_NAME || 'DC News';

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) => resolvePageComponent(`./Pages/${name}.tsx`, import.meta.glob('./Pages/**/*.tsx')),
    setup({ el, App, props }) {
        if (import.meta.env.DEV) {
            createRoot(el).render(<App {...props} />);
            return
        }

        hydrateRoot(el, <App {...props} />);
    },
    progress: {
        color: '#4B5563',
    },
});
