import { Stack, Autocomplete, TextField } from "@mui/material"
// import { useState } from "react";


const skills = ['HTML', "CSS"];


const MuiAutocomplete = () => {
    // const [value, setValue] = useState<string | null>(null)

    return (
        <Stack spacing={2} width="250px">
            <Autocomplete
                options={skills}
                renderInput={(params) => <TextField {...params} label="Skills" />}
            // value={value}
            // freeSolo
            />
        </Stack>
    )
}

export default MuiAutocomplete
