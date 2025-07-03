import { Link, Stack } from "@mui/material"

const MuiLink = () => {
    return (
        <Stack spacing={2} direction='row' m={4}>
            <Link href='#' variant="body1">Link</Link>
            <Link href='#' color="secondary" underline="hover">Secondary</Link>
            <Link href='#' color="secondary" underline="none">underline</Link>
        </Stack>
    )
}

export default MuiLink