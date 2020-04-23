import React from 'react'
import { Container, Grid, Typography, TextField, Button } from '@material-ui/core'
import Dashboard from '../../templates/Dashboard'
import { PaperStyled, Fieldset } from './styles'

export default function ModalInsert() {
    return (
        <React.Fragment>
            <PaperStyled elevation={3}>
                <form>
                    <Fieldset>
                        <legend>Dados Pessoais</legend>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Nome Completo"
                                    fullWidth
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="cpf"
                                    name="cpf"
                                    label="CPF"
                                    fullWidth
                                    autoComplete="cpf"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="crm"
                                    name="crm"
                                    label="CRM"
                                    fullWidth
                                    autoComplete="crm"
                                />
                            </Grid>
                        </Grid>
                    </Fieldset>
                    <Fieldset>
                        <legend>Contatos</legend>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Nome Completo"
                                    fullWidth
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="cpf"
                                    name="cpf"
                                    label="CPF"
                                    fullWidth
                                    autoComplete="cpf"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="crm"
                                    name="crm"
                                    label="CRM"
                                    fullWidth
                                    autoComplete="crm"
                                />
                            </Grid>
                        </Grid>
                    </Fieldset>
                    <Fieldset>
                        <legend>Especialidades</legend>
                        <Grid container spacing={3}>
                            <Grid item xs={12} sm={6}>
                                <TextField
                                    required
                                    id="name"
                                    name="name"
                                    label="Nome Completo"
                                    fullWidth
                                    autoComplete="name"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="cpf"
                                    name="cpf"
                                    label="CPF"
                                    fullWidth
                                    autoComplete="cpf"
                                />
                            </Grid>
                            <Grid item xs={12} sm={3}>
                                <TextField
                                    required
                                    id="crm"
                                    name="crm"
                                    label="CRM"
                                    fullWidth
                                    autoComplete="crm"
                                />
                            </Grid>
                        </Grid>
                    </Fieldset>

                    <div>
                        <Button>
                            Back
                                    </Button>
                        <Button
                            variant="contained"
                            color="primary"
                        >
                            GRAVAR
                                </Button>
                    </div>
                </form>
            </PaperStyled>
        </React.Fragment>
    )
}