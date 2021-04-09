import React, { useState } from 'react'
import { Box, Typography, Button, Container } from '@material-ui/core'
import { blue } from '@material-ui/core/colors'
import { makeStyles } from '@material-ui/core/styles';
import TextField from '@material-ui/core/TextField';

const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
        width: '25ch',
      },
    },
  }));

  function func1() {
    var x1=document.getElementById('standard-basic').value;
    alert("Hello"+" "+x1);
  }

  function apicall() {
    console.log("In api call function")
    document.getElementById("apicaller").innerHTML="<h5>Sarkar ka swagat hai :)</h5>"; 
  }


//Box k width se div element ka structure fix kar sakte within UI  https://www.youtube.com/watch?v=3xhIcYeRgks
//onChange function ka istemaal agar textbox mein nai karenge toh text field lock raega
//console.warn("response returned is "+JSON.stringify(respones_recieved)+" type "+typeof(respones_recieved))
const Contact = () => {

    const classes = useStyles();  
    const [FirstName,setFirstName]=useState("");
    const [Name,setName]=useState("");
    const [Job,setJob]=useState("");
      //yeh ek tarah ka constructdor samjho
  function setter_function(){
    console.log("In setter_function"+FirstName)
    document.getElementById("apicaller").innerHTML="My Name is "+" "+FirstName
  }

  function saveUser(){
    let data={Name,Job}
    console.warn(Name,Job);
    fetch(
      "https://reqres.in/api/users",
      {
        method: 'POST',
        headers:{
          'Accept':'application/json',
          'Content-Type':'application/json'
        },
        body:JSON.stringify(data)
      }
    )
    .then
    (
      (result)=>
      {
        console.warn("Recieved response in promise is "+result+" type "+typeof(result))
        result.json().then
        (
          (respones_recieved)=>
          {
            document.getElementById("apicaller").innerHTML=JSON.stringify(respones_recieved)
          }
        )
      }
    )
  }
    return (
      <div>
      <Container maxWidth={1} disableGutters>
        <Box bgcolor="aliceblue" display="flex" border={1} color={blue} width={1} p={30} border={1}>
                <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Name" value={Name} onChange={(e) => {setName(e.target.value)}}/> 
                    <TextField id="standard-basic" label="Job" value={Job} onChange={(e) => {setJob(e.target.value)}}/> 
                    <TextField id="standard-basic" label="First Name" value={FirstName} onChange={(e) => {setFirstName(e.target.value)}}/> 
                    <TextField id="filled-basic" label="Middle Name" variant="filled" />
                    <TextField id="outlined-basic" label="Last Name" variant="outlined" />
                    <Button style={{maxWidth: '150px', maxHeight: '120px', minWidth: '90px', minHeight: '55px'}} onClick={() => { alert('clicked by Amit') }} variant="contained" color="primary">CLICK ME</Button>
                    <Button style={{maxWidth: '150px', maxHeight: '120px', minWidth: '90px', minHeight: '55px'}} onClick={() => {func1() }} variant="contained" color="primary">CLICK ME Modular</Button>
                    <Button style={{maxWidth: '150px', maxHeight: '120px', minWidth: '90px', minHeight: '55px'}} onClick={() => {apicall() }} variant="contained" color="primary">CLICK ME API</Button>
                    <Button style={{maxWidth: '150px', maxHeight: '120px', minWidth: '220px', minHeight: '55px'}}  onClick={() => {setter_function() }} variant="contained" color="primary">Babu ka swagat kariye</Button>
                    <Button style={{maxWidth: '150px', maxHeight: '120px', minWidth: '90px', minHeight: '55px'}} onClick={() => { saveUser() }} variant="contained" color="primary">Save New User</Button>
                </form>
        </Box>    
        </Container>

<div id="apicaller">
<h5>Welcome Home Babe</h5>
</div>
      </div>
    )
}

export default Contact
