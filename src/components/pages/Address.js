import React,{useState,useEffect} from 'react'
import {Box,Typography,Container,TableContainer,Table,TableBody,TableHead,TableCell,TableRow, Paper, makeStyles,TablePagination} from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import axios from 'axios'

const useStyles = makeStyles((theme) => (
    {
        root: {
            maxWidth: "100vw",
            height: "100vh",
            backgroundColor: theme.palette.grey['200'],
            paddingTop: theme.spacing(8),
        }
    }
));


//Box k width se div element ka structure fix kar sakte within UI
const Address = () => {

    const classes = useStyles();
    // users setusers do variable banein jismein value usestate array k dwara pass hogi
    const [users, setUsers] = useState([]);
    const [page, setPage] = useState(0)
    const [rowsPerPage, setRowsPerPage] = useState(3)
    const [loading, setLoading] = useState(false)

    const loadUsers = async () => {
        const promise_responce=await axios.get("https://jsonplaceholder.typicode.com/users")
        setUsers(promise_responce.data)
    }
        useEffect(() => {
            loadUsers()
        }, [])

    const onChangePage_function = (event, nextPage) => {
        setPage(nextPage);
    }

    const onChangeRowsPerPage_function = (event) => {
        setRowsPerPage(event.target.value)
    }
    return (
        ////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
        <TableContainer component={Paper} className={classes.root}>
            <Table>
                <TableHead>
                    <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell>Email</TableCell>
                        <TableCell>ID</TableCell>
                    </TableRow>
                </TableHead>
               

                <TableBody>
                {users.slice(page * rowsPerPage,page * rowsPerPage + rowsPerPage).map((user) => (
                <TableRow>
                        <TableCell>{user.name}</TableCell>
                        <TableCell>{user.email}</TableCell>
                        <TableCell>{user.phone}</TableCell>
                </TableRow>
                ))}                   
                </TableBody>
            </Table>
          
            <TablePagination
            rowsPerPageOptions={[3,6,1,2]}
            count={users.length}
            rowsPerPage={rowsPerPage}
            page={page}
            onChangePage={onChangePage_function}
            onChangeRowsPerPage={onChangeRowsPerPage_function}

            />
           
            
        </TableContainer>



        

    )
}

export default Address
 