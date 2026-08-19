// src/ThemeSwitcher.js

import { useTheme } from "../Hooks/useTheme";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button
            onClick={toggleTheme}
            className="flex items-center justify-center text-white rounded-full bg-primary w-7 h-7"
        >
            {theme === "light" ? (
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-moon"></i>
                </div>
            ) : (
                <div className="flex items-center gap-2">
                    <i className="fa-solid fa-sun"></i>
                </div>
            )}
        </button>
    );
};

export default ThemeSwitcher;
