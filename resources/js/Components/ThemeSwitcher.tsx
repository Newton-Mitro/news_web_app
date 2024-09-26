// src/ThemeSwitcher.js
import useTheme from "@/Hooks/useTheme";

const ThemeSwitcher = () => {
    const { theme, toggleTheme } = useTheme();

    return (
        <button onClick={toggleTheme} className="">
            {theme === "light" ? (
                <i className="fa-solid fa-cloud-moon"></i>
            ) : (
                <i className="fa-solid fa-cloud-sun"></i>
            )}
        </button>
    );
};

export default ThemeSwitcher;
