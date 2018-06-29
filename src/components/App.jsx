import React from 'react';
import { Switch, Route } from 'react-router-dom';
import './app.css';
import Header from './Header.jsx';
import KegList from './KegList.jsx';
import AddKeg from './AddKeg.jsx';


function App(){
  return (
    <div className='app-background'>
      <div className='app-wrapper'>
        <Header/>
        <Switch>
          <Route exact path='/keglist' component={KegList}/>
        </Switch>
      </div>

    </div>


  );
}

export default App;
