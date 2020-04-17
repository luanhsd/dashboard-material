import React from 'react'
import { Toolbar, Typography, IconButton } from '@material-ui/core'
import Night from '@material-ui/icons/Brightness3';
import Day from '@material-ui/icons/Brightness5'
import { AppBarStyled, ToolbarStyled } from './styles'


export default function Header(props) {

    function setIcons(theme) {
        if (theme === 'dark') {
            return <Night style={{ color: '#fff' }} />
        } else {
            return <Day style={{ color: '#fff' }} />
        }
    }

    return (
        <React.Fragment>
            <AppBarStyled position="static">
                <ToolbarStyled>
                    <Typography variant="h5">Home</Typography>
                    <IconButton onClick={props.setTheme}>
                        {setIcons(props.Icon)}
                    </IconButton>
                </ToolbarStyled>
            </AppBarStyled>
        </React.Fragment>
    )
}