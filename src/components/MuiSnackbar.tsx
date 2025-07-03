import { Snackbar, Button } from "@mui/material"
import { useState } from "react"

const MuiSnackbar = () => {
    const [open, setOpen] = useState(false);
    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return
        } else {
            setOpen(false)
        }
    }

    return (
        <>
            <Button
                onClick={() => setOpen(true)}
            >
                Submit
            </Button>
            <Snackbar
                message="Form Created"
                autoHideDuration={4000}
                open={open}
                onClose={handleClose}
                anchorOrigin={{
                    vertical: 'bottom',
                    horizontal: 'center'
                }}
            />
        </>
    )
}

export default MuiSnackbar