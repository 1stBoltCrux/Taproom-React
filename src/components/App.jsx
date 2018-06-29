import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './app.css';
import Header from './Header.jsx';
import KegList from './KegList.jsx';
import AddKeg from './AddKeg.jsx';



function App(){
  return (
    <div className={styles.appBackground}>
      <div className={styles.appWrapper}>
        <Header/>
        <Switch>
          <Route exact path='/keglist' component={KegList}/>
          <Route exact path='/addkeg' component={AddKeg}/>
        </Switch>
      </div>

    </div>


  );
}

export default App;
