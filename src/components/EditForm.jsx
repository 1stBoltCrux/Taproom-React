import React from 'react';
import styles from './editform.css';

export default function EditForm(props){
  return(
    <div className={styles.addKegWrapper}>
        <div className={styles.kegCard}>
          <h3>Edit This Keg</h3>
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
      <div onClick={props.handleClick} className={styles.addKegButton}>
        <p>Finish Editing</p>
      </div>
    </div>
</div>
  )
}
