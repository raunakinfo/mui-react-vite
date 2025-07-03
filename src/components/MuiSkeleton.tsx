import { Skeleton, Stack } from "@mui/material"

const MuiSkeleton = () => {
  return (
    <Stack spacing={1} width='250px'>
      <Skeleton animation={false} /> {/* default skeleton which is text*/}
      <Skeleton variant="circular" width={40} height={40} animation='wave' />
      {/* <Skeleton variant="rectangle" width={250} height={100} /> */}
    </Stack>
  )
}

export default MuiSkeleton