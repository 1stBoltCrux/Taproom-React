import React from 'react';
import Nav from './Nav';
import Home from './Home';
import Team from './Team';
import AboutUs from './AboutUs';
import Error404 from './Error404';
import { Switch, Route } from 'react-router-dom';
import './app.css';


function App(){
  return (
    <div className='app-wrapper'>
      <Nav/>
      <Switch>
        <Route exact path = '/' component={Home}/>
        <Route exact path = '/team' component={Team}/>
        <Route exact path = '/aboutus' component={AboutUs}/>
        <Route component={Error404}/>
      </Switch>
    </div>

  );
}

export default App;
