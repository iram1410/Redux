import React from 'react';
import Home from './Home';
import About from './About';
import Contact from './Contact';
import Images from './Images';
import Navbar from './Navbar';
import Adminlogin from './Adminlogin';
import Rest from './Rest';

import {Switch,Route} from 'react-router-dom';


const App = () => 
{
    return ( 
        <>
        <Navbar/>
        <Switch>
        <Route exact path="/" component={Home}></Route>
        <Route exact path="/about" component={About}></Route>
        <Route exact path="/contact" component={()=> <Contact name="iram"/>}></Route>
        <Route exact path="/admin" component={Adminlogin}></Route>
        <Route exact path="/images/:iname/:lname" render={()=><Images name="iram.png"/>}></Route>
        <Route exact path="/ahome" component={Rest}></Route>

        
        </Switch>
        </>
    )
}
export default App;