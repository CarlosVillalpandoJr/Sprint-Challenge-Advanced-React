import React from 'react'
import { useDarkMode } from '../hooks/useDarkMode';

const NavBar = () => {
    const [darkMode, setDarkMode] = useDarkMode(false);
    const toggleDark = e => {
        e.preventDefault();
        setDarkMode(!darkMode)
    }

    return (
        <div>
            <h1>Advanced React: Women's World Cup</h1>
            <button data-testid='toggle-button' onClick={toggleDark}>Enable Dark Mode</button>
        </div>
    )
}

export default NavBar;