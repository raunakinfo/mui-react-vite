import { Box, TextField, MenuItem } from '@mui/material'
import { useState } from 'react'

const MuiSelect = () => {
    const [countries, setCountries] = useState<string[]>([]);
    const handleCountryChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const value = event.target.value;
        setCountries(typeof value === 'string' ? value.split(',') : value);
    }
    return (
        <Box width="250px">
            <TextField
                label="Select Country"
                select
                value={countries}
                onChange={handleCountryChange}
                fullWidth
                slotProps={{
                    select: {
                        multiple: true,
                    }
                }}
                size='small'
                error={!countries.length}
            >
                <MenuItem value="IN">India </MenuItem>
                <MenuItem value="US">USA </MenuItem>
                <MenuItem value="RU">Russia </MenuItem>
            </TextField>
        </Box >
    )
}

export default MuiSelect