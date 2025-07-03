import { Box, FormControlLabel, Checkbox, FormControl, FormLabel, FormGroup, Rating } from "@mui/material"
import { useState } from "react"


const MuiCheckBox = () => {
    const [acceptTnC, setAcceptTnC] = useState<boolean>(false);
    const [skills, setSkills] = useState<string[]>([]);

    const HandleChangeChecked = (event: React.ChangeEvent<HTMLInputElement>) => {
        setAcceptTnC(event.target.checked)
    }

    const handleSkillChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const index = skills.indexOf(event.target.value);
        if (index === -1) {
            setSkills([...skills, event.target.value])
        } else {
            setSkills(skills.filter((skill) => skill !== event.target.value))
        }
    }

    return (
        <Box>
            <Box>
                <FormControlLabel
                    label="I Accept Terms and Conditions"
                    control={<Checkbox checked={acceptTnC} onChange={HandleChangeChecked} />}
                />
            </Box>
            <Box>
                <FormControl>
                    <FormLabel>Skills</FormLabel>
                    <FormGroup row>
                        <FormControlLabel
                            label="HTML"
                            control={<Checkbox
                                value="html"
                                checked={skills.includes('html')}
                                onChange={handleSkillChange}
                            />}
                        />
                        <FormControlLabel
                            label="CSS"
                            control={<Checkbox
                                value="css"
                                checked={skills.includes('css')}
                                onChange={handleSkillChange}
                            />}
                        />
                        <FormControlLabel
                            label="JavaScript"
                            control={<Checkbox
                                value="javascript"
                                checked={skills.includes('javascript')}
                                onChange={handleSkillChange}
                            />}
                        />
                    </FormGroup>
                </FormControl>
            </Box>
            {/* Rating */}
            <Box>
                <Rating name="customized-10" defaultValue={2} max={10} />
            </Box>
        </Box>
    )
}

export default MuiCheckBox