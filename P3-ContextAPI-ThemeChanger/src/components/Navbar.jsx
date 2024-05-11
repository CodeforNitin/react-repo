import React, { useContext } from 'react'
import { ThemeContext } from './../context/ThemeContext';

function Navbar() {

const themeContext  = useContext(ThemeContext);

const {isLightTheme, light, dark} = themeContext

const theme = isLightTheme ? light : dark

  return (
    <nav style={{background: theme.ui, color: theme.syntax}}>
        <h1>Context App</h1>
        <ul>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </nav>
  )
}

export default Navbar