
import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import Button from '@material-ui/core/Button';  
import { AppBar, Container, Toolbar, Typography } from '@material-ui/core';
import {BrowserRouter,Link,Route,Switch} from 'react-router-dom';
import About from './pages/About';
import Contact from './pages/Contact';
import Address from './pages/Address';
import Home from './pages/Home';
import Spinner from './pages/spinner'
//Material ui ka button import karaya

class Counter extends Component {

    //Har component mein jab bhi variable use karna hoga toh uske liye ham react mein state use karte hain
    state= {
        count: 0
    }
    //Navigation bar k liye appbar,toolbar aur Typogaraphy teeno use karo.
    render(){
        return(
            //hamesha div k andar html code likhna
            <div>
             {/* <span> { this.state.count } </span>
             <span> { this.change() } </span>
             <h1>Counter Component</h1>
             <button className="badge badge-primary m-2">Increament</button> 
             <Button variant="contained" color="primary">Hello World</Button>*/}
            <BrowserRouter>
                <switch>
                    <Route exact path="/about" component={About}></Route>
                    <Route exact path="/contact" component={Contact}></Route>
                    <Route exact path="/address" component={Address}></Route>
                    <Route exact path="/home" component={Home}></Route>
                    <Route exact path="/spinner" component={Spinner}></Route>



                </switch>
            

             <Container>
             <AppBar color="secondary" variant="fixed">
                 <Toolbar>
                    <Typography variant="h6" style={{ flexGrow:1}}>Material UI</Typography>
                    <div color="inherit">
                    <Button color="inherit" component={Link} to="/home">Home</Button>
                    <Button color="inherit" component={Link} to="/about">About</Button>
                    <Button color="inherit" component={Link} to="/contact">Contact</Button>
                    <Button color="inherit" component={Link} to="/address">Address</Button>
                    </div>
                </Toolbar>
             </AppBar>
             </Container>
             </BrowserRouter>
             
            </div>
       
        )
    }

    //Lets use function now
    change(){
        return this.state.count === 0 ? 'Zero hai bhai' : this.state.count;
    }

}

export default Counter;
