import React from 'react';
import xlogo from './../assets/images/x.png'
import logo from './../assets/images/logo.png';
import {Link} from 'react-router-dom';
import styles from './header.css';

export default function Header(props){
  return(
    <div className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        <img src={logo}/>
      </div>

      <div className={styles.clearList}>
        <div className={styles.headerLinks}>
          <ul>
            <Link to='/'><li>View Our Selection</li></Link>
            <Link to='/addkeg'><li>Add a New Keg</li></Link>
          </ul>
        </div>
        <div className={styles.clearListButton}>
          <img src={xlogo} onClick={props.onClear}/>

      </div>
        <p>Clear List</p>
    </div>
    </div>
  );
}
