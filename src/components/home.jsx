import React, { Component } from 'react';
import 'bootstrap/dist/css/bootstrap.css';

class Home extends Component {

    //Har component mein jab bhi variable use karna hoga toh uske liye ham react mein state use karte hain
    state= {
        count: 0
    }

    render(){
        return(
            //hamesha div k andar html code likhna
            <div>
                     <nav class="navbar navbar-expand-sm bg-dark navbar-dark">
                    
                    <a class="navbar-brand" href="#">Amit Bhaodria</a>

                   
                    <ul class="navbar-nav">
                        <li class="nav-item">
                        <a class="nav-link" href="#">Home</a>
                        </li>
                        <li class="nav-item">
                        <a class="nav-link" href="#">About Me</a>
                        </li>

                       
                        <li class="nav-item dropdown">
                        <a class="nav-link dropdown-toggle" href="#" id="navbardrop" data-toggle="dropdown">
                            Dropdown link
                        </a>
                        <div class="dropdown-menu">
                            <a class="dropdown-item" href="#">Link 1</a>
                            <a class="dropdown-item" href="#">Link 2</a>
                            <a class="dropdown-item" href="#">Link 3</a>
                        </div>
                        </li>
                    </ul>
                    </nav>

                   
  
                    <div class="container">
                    <h3>Navbar With Dropdown</h3>
                    <p>This example adds a dropdown menu in the navbar.</p>
                    </div>
                  
            </div>
       
        )
    }

    //Lets use function now
    change(){
        return this.state.count === 0 ? 'Zero hai bhai' : this.state.count;
    }

}

export default Home;
