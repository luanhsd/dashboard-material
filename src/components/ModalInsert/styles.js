import styled from 'styled-components'
import { Paper } from '@material-ui/core'

export const PaperStyled = styled(Paper)`
    margin-top: 5%;
    margin-bottom: 5%;
    padding: 2%;
`

export const Fieldset = styled.fieldset`
    color: rgb(36,81,181);
    border: 1px solid;
    border-color:rgba(36,81,181,0.3);
    border-radius: 4px;
    padding: 1%;
    margin-bottom: 1%;
    & legend {
        padding: 0 1% 0 1%;
    }
`

