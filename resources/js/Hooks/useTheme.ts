// src/useTheme.js
import { useState, useEffect } from 'react';



const useTheme = () => {
    // Retrieve the theme from local storage or default to 'light'
    const [theme, setTheme] = useState(() => {
        const savedTheme = localStorage.getItem('theme');
        return savedTheme ? savedTheme : 'light';
    });

    useEffect(() => {
        // Save the theme to local storage
        localStorage.setItem('theme', theme);
        document.body.setAttribute('class', theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
    };

    return { theme, toggleTheme };
};

export default useTheme;
