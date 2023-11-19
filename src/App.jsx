/** @format */

import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Main from './components/Main'

export default function App() {
    const [darkMode, setDarkMode] = useState(false)

    function toggleDarkMode() {
        setDarkMode(prevState => !prevState)
        console.log(darkMode)
    }

    return (
        <div className="container">
            <Navbar toggleDarkMode={toggleDarkMode} darkMode={darkMode} />
            <Main darkMode={darkMode} />
        </div>
    )
}
