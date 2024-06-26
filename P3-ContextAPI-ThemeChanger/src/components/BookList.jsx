import React, { useContext } from 'react'
import { ThemeContext } from './../context/ThemeContext';

export default function BookList() {

const themeContext  = useContext(ThemeContext);

const {isLightTheme, light, dark} = themeContext

const theme = isLightTheme ? light : dark

  return (
    <div className="book-list" style={{ color: theme.syntax, background: theme.bg }}>
        <ul>
            <li style={{ background: theme.ui }}>the way of kings</li>
            <li style={{ background: theme.ui }}>the name of the wind</li>
            <li style={{ background: theme.ui }}>the final empire</li>
        </ul>
    </div>
  )
}
