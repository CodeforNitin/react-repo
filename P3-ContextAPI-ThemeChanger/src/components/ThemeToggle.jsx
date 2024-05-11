import React, { useContext } from 'react'
import { ThemeContext } from '../context/ThemeContext';

export default function ThemeToggle() {

const themeContext = useContext(ThemeContext);
const {toggleTheme} = themeContext
  return (
   <button onClick={toggleTheme}>Theme Chage</button>
  )
}
