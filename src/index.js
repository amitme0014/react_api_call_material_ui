import React from 'react';
import ReactDom from 'react-dom';
import 'bootstrap/dist/css/bootstrap.css';

import Counter from './components/counter';
import Home from './components/home';
//const element = <h1>Hello Pammu</h1>

//Now we want upper element to be renedered in react-dom, wo below code ka use kar k karte hain
// root div jo hai wo index.html k andar hai, index.html public folder k andar hai, neeche wale code mein ham element ko root div, index.html mein render kar denge

//ReactDom.render(element,document.getElementById('root'));

ReactDom.render(<Counter />,document.getElementById('root'));