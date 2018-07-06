import React from 'react';
import styles from './keglist.css';
import Keg from './Keg.jsx';

export default function KegList(props) {
    return(
      <div className={styles.kegListWrapper}>
        {props.passedState.masterKegList.map((keg, index) =>
          <Keg
          name={keg.name}
          brewer={keg.brewer}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          key={index}/>
        )}

      </div>
    )
}
