import {
    TableContainer,
    Table,
    TableHead,
    TableBody,
    TableRow,
    TableCell,
    Paper
} from "@mui/material"

const MuiTable = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300px' }}>
            <Table aria-label="table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Id</TableCell>
                        <TableCell>First Name</TableCell>
                        <TableCell>Last Name</TableCell>
                        <TableCell align="center">Email</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {
                        tableData.map((row) => (
                            <TableRow
                                key={row.id}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                            >
                                <TableCell>{row.id}</TableCell>
                                <TableCell>{row.first_name}</TableCell>
                                <TableCell>{row.last_name}</TableCell>
                                <TableCell align="center">{row.email}</TableCell>
                            </TableRow>
                        ))
                    }
                </TableBody>
            </Table>
        </TableContainer>
    )
}


const tableData = [{
    "id": 1,
    "first_name": "Barty",
    "last_name": "Rowes",
    "email": "browes0@cmu.edu",
    "gender": "Male",
    "ip_address": "169.87.42.100"
}, {
    "id": 2,
    "first_name": "Michele",
    "last_name": "De Vile",
    "email": "mdevile1@google.com.br",
    "gender": "Female",
    "ip_address": "67.165.247.94"
}, {
    "id": 3,
    "first_name": "Laura",
    "last_name": "O' Shea",
    "email": "loshea2@dmoz.org",
    "gender": "Female",
    "ip_address": "3.65.247.206"
}, {
    "id": 4,
    "first_name": "Honey",
    "last_name": "Teague",
    "email": "hteague3@naver.com",
    "gender": "Agender",
    "ip_address": "181.228.142.201"
}, {
    "id": 5,
    "first_name": "Mahalia",
    "last_name": "Halson",
    "email": "mhalson4@merriam-webster.com",
    "gender": "Female",
    "ip_address": "255.84.58.224"
}, {
    "id": 6,
    "first_name": "Dyanne",
    "last_name": "Sollam",
    "email": "dsollam5@opera.com",
    "gender": "Female",
    "ip_address": "214.252.205.71"
}, {
    "id": 7,
    "first_name": "Gardner",
    "last_name": "Wood",
    "email": "gwood6@shareasale.com",
    "gender": "Male",
    "ip_address": "126.31.231.104"
}, {
    "id": 8,
    "first_name": "Jacynth",
    "last_name": "Casaletto",
    "email": "jcasaletto7@usa.gov",
    "gender": "Female",
    "ip_address": "235.17.131.112"
}, {
    "id": 9,
    "first_name": "Kimball",
    "last_name": "Dengel",
    "email": "kdengel8@fda.gov",
    "gender": "Male",
    "ip_address": "19.35.21.212"
}, {
    "id": 10,
    "first_name": "Lorenza",
    "last_name": "Morriarty",
    "email": "lmorriarty9@histats.com",
    "gender": "Female",
    "ip_address": "194.232.23.44"
}]


export default MuiTable