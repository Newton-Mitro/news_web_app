// src/ThemeSwitcher.js
import React from 'react';
import useTheme from "@/Hooks/useTheme";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="">
            {theme === 'light' ? <i className="fa-solid fa-cloud-moon fa-2x"></i> : <i className="fa-solid fa-cloud-sun fa-2x"></i>}
        </button>
    );
};

export default ThemeSwitcher;
