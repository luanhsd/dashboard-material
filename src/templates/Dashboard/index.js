import React from 'react'
import { ThemeProvider } from 'styled-components'
import CssBaseline from '@material-ui/core/CssBaseline'
import GlobalStyles from '../../styles'

export default function Dashboard(props) {
    return (
        <React.Fragment>
            <ThemeProvider theme={props.theme}>
                <CssBaseline>
                    <GlobalStyles />
                    {props.children}
                </CssBaseline>
            </ThemeProvider>
        </React.Fragment>
    )
}