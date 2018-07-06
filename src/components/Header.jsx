import React from 'react';

import logo from './../assets/images/logo.png';
import {Link} from 'react-router-dom';
import styles from './header.css';

export default function Header(){
  return(
    <div className={styles.headerWrapper}>
      <div className={styles.headerLogo}>
        <img src={logo}/>
      </div>
      <div className={styles.headerLinks}>
        <ul>
          <Link to='/keglist'><li>View Our Selection</li></Link>
          <Link to='/addkeg'><li>Add a New Keg</li></Link>
        </ul>
      </div>

    </div>
  );
}
