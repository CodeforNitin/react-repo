import React, { createContext, useState } from 'react';

export const ThemeContext = createContext();

const ThemeContextProvider = (props) => {
    const [isLightTheme, setIsLightTheme] = useState(true);

    const theme = {
        isLightTheme: isLightTheme,
        light: { syntax: '#555', ui: '#ddd', bg: '#eee' },
        dark: { syntax: '#ddd', ui: '#333', bg: '#555' }
    };

    //toggle function
    const toggleTheme = () => {
        setIsLightTheme(!isLightTheme)
    }
    return (
        <ThemeContext.Provider value={{ ...theme, toggleTheme}}>
            {props.children}
        </ThemeContext.Provider>
    );
};

export default ThemeContextProvider;
