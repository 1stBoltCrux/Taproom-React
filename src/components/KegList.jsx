import React from 'react';
import styles from './keglist.css';
import Keg from './Keg.jsx';
import PropTypes from 'prop-types';

export default function KegList(props) {
  return(
    <div className={styles.kegListWrapper}>
      {props.newMasterKegList.map((keg, index) =>
        <Keg
          name={keg.name}
          brewer={keg.brewer}
          description={keg.description}
          abv={keg.abv}
          price={keg.price}
          remaining={keg.remaining}
          formVisible={keg.formVisible}
          key={keg.id}
          kegId={keg.id}
          onHandleSubmitEditForm={props.onHandleSubmitEditForm}
          onHandleClick={props.onHandleClick}
          onSellPint={props.onSellPint}/>
      )}
    </div>
  );
}

KegList.PropTypes = {
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
}
