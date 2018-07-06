import React from 'react';
import './keg.css';
import SellButton from './SellButton.jsx';
import EditKeg from './EditKeg.jsx';
import PropTypes from 'prop-types';
import styles from './keg.css';


export default function Keg(props){
  console.log(props.remaining)

  let warning = {
    color: 'white'
  }
  if (props.remaining < 20) {
    warning = {
      color: 'red'
    }
  }

  return(
    <div className={styles.kegWrapper}>
      <div className={styles.kegCard}>
        <div className={styles.kegName}>
          <h2>{props.name}</h2>
        </div>
        <div className={styles.line}></div>
        <div className={styles.brewedBy}>
            <h3>Brewed by: <span className={styles.emphasis}>{props.brewer}</span></h3>
        </div>

        <div className={styles.kegContent}>

          <div>
            <ul>
              <li>Description: <span className={styles.emphasis}>{props.description}</span></li>
              <li>ABV: <span className={styles.emphasis}> {props.abv}</span></li>
            </ul>
          </div>
          <div>
            <ul>
              <li><span className={styles.emphasis}>${props.price}</span></li>
              <li>Pints Remaining: <span style={warning} className={styles.emphasis}>{props.remaining} </span></li>
            </ul>
          </div>
        </div>
        <div className={styles.kegButtons}>
          <ul>
            <li><SellButton onSellPint={props.onSellPint} kegId={props.kegId}/></li>
            <li><EditKeg                                                onHandleSubmitEditForm={props.onHandleSubmitEditForm}
              onHandleClick={props.onHandleClick}
              formVisible={props.formVisible}
              kegId={props.kegId}
              name={props.name}
              brewer={props.brewer}
              description={props.description}
              abv={props.abv}
              price={props.price}
              remaining={props.remaining}/>
            </li>
          </ul>
        </div>
      </div>

    </div>
  );
  Keg.PropTypes = {
    name: PropTypes.string,
    brewer: PropTypes.string,
    description: PropTypes.string,
    abv: PropTypes.string,
    price: PropTypes.string,
    remaining: PropTypes.string,
    formVisible: PropTypes.boolean,
    key: PropTypes.string,
    kegId: PropTypes.string,
    onHandleSubmitEditForm: PropTypes.func,
    onHandleClick: PropTypes.func,
    onSellPint: PropTypes.func
  };
}
