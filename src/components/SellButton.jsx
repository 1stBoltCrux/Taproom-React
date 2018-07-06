import React from 'react';
import styles from './sellbutton.css';

export default function SellButton(props){
  return(
    <div onClick={() => props.onSellPint(props.kegId)} className={styles.sellButtonWrapper}>
      <p>Sell a Pint</p>
    </div>
  );
}
