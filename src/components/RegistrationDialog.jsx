import React from 'react'
import Dialog from '@mui/material/Dialog';
import { Box, Button, DialogActions, DialogContent, DialogTitle, TextField } from '@mui/material';

function RegistrationDialog() {
    return (
        <Dialog
            open
        >
            <DialogContent
                sx={{
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center"
                }}
            >
                <DialogTitle
                    variant='h5'
                >SIGN IN</DialogTitle>

                <DialogActions
                    sx={{
                        display: "flex",
                        flexDirection: "column",
                        gap: 3
                    }}
                >

                    <Box
                        sx={{
                            display: "flex",
                            flexDirection: "column",
                            gap: 2
                        }}
                    >
                        <TextField
                            variant='outlined'
                            label="email"
                            type='email'
                        ></TextField>
                        <TextField
                            variant='outlined'
                            label="password"
                            type='password'
                        ></TextField>
                        <TextField
                            variant='outlined'
                            label="confirm password"
                            type='password'
                        ></TextField>
                    </Box>

                    <Button
                        variant='contained'
                    >SIGN IN</Button>
                </DialogActions>
            </DialogContent>
        </Dialog>
    )
}

export default RegistrationDialog