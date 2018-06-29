import React from 'react';
import styles from './addkeg.css';

export default function AddKeg(){
  return(
    <div className={styles.addKegWrapper}>
        <div className={styles.kegCard}>
          <h3>Add a New Keg</h3>
          <div className={styles.kegContent}>
            <div className='name-brewer'>
              <ul>
                <li>Beer Name: <input type='text'/></li>
                <li>Brewed by: <input type='text'/></li>
              </ul>
            </div>
            <div className='description-abv'>
              <ul>
                <li>Description:<input type='text'/></li>
                <li>ABV:<input type='text'/></li>
              </ul>
            </div>
            <div className='price-remaining'>
              <ul>
                <li>Price:<input type='text'/></li>
                <li>Total Pints:<input type='text'/></li>
              </ul>
              </div>
          </div>
      <div className={styles.addKegButton}>
        <p>Add a New Keg</p>
      </div>
    </div>
</div>
  )
}
