import React from 'react';

import styles from './index.module.css'

import Truck from '../../asset/image/delivery-truck.svg'
import  QuestionGame from '../QuestionGame/index'

function TransportGame () {
 
     return (
      <div className={styles.principalContainerLogo}>
        <div className={styles.road}>
            <img src={Truck} alt="camion en movimiento" className={styles.truck}/> 
        </div>
        

        <QuestionGame />
        
      </div>
    )
}

export default TransportGame;