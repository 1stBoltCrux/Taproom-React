import React from 'react';
import { Switch, Route } from 'react-router-dom';
import styles from './app.css';
import Header from './Header.jsx';
import KegList from './KegList.jsx';
import AddKeg from './AddKeg.jsx';



class App extends React.Component {
  constructor(props){
    super(props);
    this.state = {
      masterKegList: [

        {
          name: 'Ruby Zozzle',
          brewer: 'Hi-Wheel',
          description: 'Sparkling Wine & Grapefruit',
          abv: '6.8%',
          price: '7',
          remaining: '20'
        },
        {
          name: 'Tart N Juicy',
          brewer: 'Epic',
          description: 'Sour IPA',
          abv: '4.5%',
          price: '6',
          remaining: '60'
        },
        {
          name: 'Hamm\'s',
          brewer: 'Miller/Coors',
          description: 'American Lager',
          abv: '4.7%',
          price: '3',
          remaining: '65'
        },
        {
          name: 'Prismatic',
          brewer: 'Ninkasi',
          description: 'Juicy IPA',
          abv:  '5.9%',
          price: '6',
          remaining: '75'
        },
        {
          name: 'Juicy Haze',
          brewer: 'New Belgium',
          description: 'India Pale Ale',
          abv:  '7.5%',
          price: '6',
          remaining: '18'
        },
        {
          name: '8 Hop',
          brewer: 'New Belgium',
          description: 'Pale Ale',
          abv:  '5.5%',
          price: '6',
          remaining: '58'
        }
      ]
    }
    this.handleNewKeg = this.handleNewKeg.bind(this);
  }
  handleNewKeg(newKeg){
    console.log(newKeg);
    let newMasterKegList = this.state.masterKegList.slice();
    newMasterKegList.push(newKeg);
    this.setState({masterKegList: newMasterKegList});
  }
render(){
  return (
    <div className={styles.appBackground}>
      <div className={styles.appWrapper}>
        <Header/>
        <Switch>
          <Route exact path='/keglist' render={()=> <KegList passedState={this.state} />}/>
          <Route exact path='/addkeg' render={()=> <AddKeg onNewKeg={this.handleNewKeg}/>}/>
        </Switch>
      </div>
    </div>
  );
}

}

export default App;
