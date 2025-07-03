import { Typography } from "@mui/material"

//component is used to add the classname to root element
//gutterBottom is used to add margin-bottom to the element
const MuiTypography = () => {
    return (
        <div>
            <Typography variant='h1'>H1 Heading</Typography>
            <Typography variant='h2'>H2 Heading</Typography>
            <Typography variant='h3'>H3 Heading</Typography>
            <Typography variant='h4' component='h1' gutterBottom>H4 Heading</Typography>
            <Typography variant='h5'>H5 Heading</Typography>
            <Typography variant='h6'>H6 Heading</Typography>

            <Typography variant='subtitle1'>Subtitle1 Heading</Typography>
            <Typography variant='subtitle2'>Subtitle2 Heading</Typography>

            <Typography variant='body1'>Body1 Heading</Typography>
            <Typography variant='body2'>Body2 Heading</Typography>
        </div>
    )
}

export default MuiTypography