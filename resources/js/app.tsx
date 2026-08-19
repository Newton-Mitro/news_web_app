import "react-photo-view/dist/react-photo-view.css";
import "react-quill/dist/quill.snow.css";
import "react-toastify/dist/ReactToastify.css";
import "../css/app.css";
import "./bootstrap";

import { createInertiaApp } from "@inertiajs/react";
import { resolvePageComponent } from "laravel-vite-plugin/inertia-helpers";
import { createRoot, hydrateRoot } from "react-dom/client";
import { ThemeProvider } from "./Hooks/useTheme";

const appName = import.meta.env.VITE_APP_NAME || "ডিসি নিউজ";

createInertiaApp({
    title: (title) => `${title} - ${appName}`,
    resolve: (name) =>
        resolvePageComponent(
            `./Pages/${name}.tsx`,
            import.meta.glob("./Pages/**/*.tsx"),
        ),
    setup({ el, App, props }) {
        const app = (
            <ThemeProvider>
                <App {...props} />
            </ThemeProvider>
        );

        if (import.meta.env.DEV) {
            createRoot(el).render(app);
        } else {
            hydrateRoot(el, app);
        }
    },
    progress: {
        color: "#4B5563",
    },
});
