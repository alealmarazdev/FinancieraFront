import React from 'react';

import styles from './index.module.css';

function ButtonMed (props) {
  const { Title, handleClick } = props;
  return (
    <button className= {`${styles.btn} mt-4 btn btn-light btn-lg`} onClick={handleClick} >{Title}</button>
    
  )
}
export default ButtonMed;

