import React, { useState } from 'react'
import { Container, Button, Dialog, DialogActions, DialogContent, DialogContentText, DialogTitle } from '@material-ui/core'
import Dashboard from '../../templates/Dashboard'
import ModalInsert from '../../components/ModalInsert'

export default function Home() {
    const [open, setOpen] = useState(false)

    function handleOpen() {
        setOpen(true);
    }

    function handleClose() {
        setOpen(false);
    }

    return (
        <React.Fragment>
            <Dashboard>
                <Container>
                    <br />
                    <Button onClick={handleOpen} variant="contained"
                        color="primary">
                        MODAL
                    </Button>
                    <Dialog
                        fullWidth="true"
                        maxWidth="lg"
                        open={open}
                        onClose={handleClose}
                        aria-labelledby="form-dialog-title">
                        <DialogTitle id="form-dialog-title">Novo médico</DialogTitle>
                        <DialogContent>
                            <ModalInsert />
                        </DialogContent>
                    </Dialog>
                </Container>
            </Dashboard>
        </React.Fragment>
    )
}