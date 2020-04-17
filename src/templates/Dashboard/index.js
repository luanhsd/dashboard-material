import React from 'react'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '../../styles'
import Header from '../../components/layout/Header'

export default function Dashboard(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={{ mode: 'light' }}>
                <CssBaseline>
                    <GlobalStyles />
                    <Header />
                    {props.children}
                </CssBaseline>
            </ThemeProvider>
        </React.Fragment >
    )
}