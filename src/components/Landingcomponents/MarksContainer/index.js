import React from 'react';

import IBMlogo from '../../../asset/image/Logos/IBM.png';
import KodemiaLogo from '../../../asset/image/Logos/Kodemia.png'

import styles from '../MarksContainer/index.module.css'

function MarkContainer () {
    return (
  
       <div className={`${styles.color}  d-flex justify-content-around  align-items-center`}>
          <img src={KodemiaLogo} className="" alt="Logo Kodemia"/>
          <img src={IBMlogo} className="" alt="Logo IBM"/>
        </div>
        
  
   )
}

export default MarkContainer