import { Stack, TextField, InputAdornment } from "@mui/material"
import VisibilityIcon from '@mui/icons-material/Visibility';
import VisibilityOffIcon from '@mui/icons-material/VisibilityOff';
import { useState } from "react";

const MuiTextField = () => {
    const [showPassword, setShowPassword] = useState(false);
    const visibilityIcon = showPassword ? <VisibilityIcon /> : <VisibilityOffIcon />
    const toggleVisibility = () => {
        setShowPassword(!showPassword);
    }

    const [value, setValue] = useState<string>('');
    return (
        <Stack spacing={4}>
            <Stack spacing={2} direction='row'>
                <TextField label="Name" variant="outlined" />
                <TextField label="Name" variant="filled" />
                <TextField label="Name" variant="standard" />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField
                    label="small secondary"
                    size="small"
                    color="secondary"
                    required
                    value={value}
                    onChange={(e) => setValue(e.target.value)}
                    error={!value}
                    helperText={!value ? 'required' : 'Don Not Share password with anyone'} />
                <TextField label="medium primary" size="medium" color="primary" />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label="Form Input" required />
                <TextField
                    label="Password"
                    type="password"
                    helperText="Do Not Share your password with Anyone"
                    disabled
                />
                <TextField label="Read Only"
                    slotProps={{
                        input: {
                            readOnly: true,
                        }
                    }} />
            </Stack>
            <Stack spacing={2} direction='row'>
                <TextField label="Amount" slotProps={{
                    input: {
                        startAdornment: <InputAdornment position="start">$</InputAdornment>,
                    },
                }} />
                <TextField label="Weight" slotProps={{
                    input: {
                        endAdornment: <InputAdornment position="end">kg</InputAdornment>
                    }
                }} />
                <TextField label="Password"
                    type={showPassword ? 'text' : 'password'}
                    slotProps={{
                        input: {
                            endAdornment: (
                                <InputAdornment position="end"
                                    aria-label="password"
                                    onClick={toggleVisibility}>
                                    {visibilityIcon}
                                </InputAdornment>
                            )
                        }
                    }} />
            </Stack>
        </Stack>
    )
}

export default MuiTextField