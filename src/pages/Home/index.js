import React, { useState } from 'react'
import Dashboard from '../../templates/Dashboard'

export default function Home() {
    const [theme, setTheme] = useState({ mode: 'light' })

    return (
        <React.Fragment>
            <Dashboard theme={theme}>
                <h1>HomePage</h1>
            </Dashboard>
        </React.Fragment>
    )
}