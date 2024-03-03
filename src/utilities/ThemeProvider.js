import React, { createContext, useContext, useState } from 'react';

const ThemeContext = createContext();

export const useTheme = () => {
    return useContext(ThemeContext);
};

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState('light');

    const toggleTheme = (currTheme) => {
        setTheme(currTheme === 'light' ? 'dark' : 'light');
    };

    const themeValues = {
        theme,
        setTheme,
        toggleTheme,
    };

    return (
        <ThemeContext.Provider value={themeValues}>{children}</ThemeContext.Provider>
    );
};
