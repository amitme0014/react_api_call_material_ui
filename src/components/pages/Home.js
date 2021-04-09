import React from 'react'
import {Box,Typography,Container} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import './Home.css'
//Apna custom css add karne k liye we will use makestyles
//ek variable bana lo useStyles 

const useStyles = makeStyles({
    blue: {
        color : "blue",
    } ,
});

function sum(a,b){
    if(a>b){
        return <span className='eval1'>a is greater than b</span>
    }
    else {
        return <span className='eval2'>b is greater than a</span>
    }
    
}

const pageTitle='Welcome to home Babe'

console.log("Hello Babe")

const Home = () => {
    const classes=useStyles();
    return (
        <Container maxwidth={1} disableGutters>
            <Box py={20} bgcolor="aliceblue" pt={40}>
            <Typography p={10} variant ="h1" component="h2"  align="center">{pageTitle}</Typography>
            </Box>
            <Box>
            <Typography p={10} variant ="h1" component="h2"  align="center">{sum(1,2)}</Typography>
            </Box>
            <Box>
            <Typography p={10} variant ="h1" component="h2"  align="center">{sum(3,2)}</Typography>
            </Box>
        </Container>
    )
}

export default Home
