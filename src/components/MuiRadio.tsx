import {
    Box,
    FormControl,
    FormLabel,
    FormControlLabel,
    RadioGroup,
    Radio,
} from "@mui/material"
import { useState } from "react"


const MuiRadio = () => {
    const [value, setValue] = useState<string>('0-2');

    const handleChangeValue = (event: React.ChangeEvent<HTMLInputElement>) => {
        setValue(event.target.value);
    }
    return (
        <Box>
            <FormControl>
                <FormLabel id="job-exp-group-label">
                    Years Of experience
                </FormLabel>
                <RadioGroup
                    name="experience"
                    aria-labelledby="job-exp-group-label"
                    value={value}
                    onChange={handleChangeValue}
                //row (if wanted in row)
                >
                    <FormControlLabel control={<Radio color="secondary" />} label="0-2" value="0-2" />
                    <FormControlLabel control={<Radio />} label="3-5" value="3-5" />
                    <FormControlLabel control={<Radio />} label="6-9" value="6-9" />
                </RadioGroup>
            </FormControl>
        </Box>
    )
}

export default MuiRadio