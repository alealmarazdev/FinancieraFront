import React from 'react';

import TitleCenter from '../../UIComponents/TitleAndSubtitle/index';
import Bubble from '../../../asset/image/bubble.png'

import styles from './index.module.css' 

function Info() {

  return (
    //1st page - log in 
    <div className={`d-flex `}>
       <div className={` col-sm-2`} > 
            <img src={Bubble}  alt="pez en movimiento" className={styles.bubble}/>
        </div>
        <TitleCenter className="col-sm-8 " title=" ¿Estás listo para hacer realidad tus sueños?" subtitle="Aprende todo lo que necesitas sobre finanzas para emprender un negocio existo de una forma divertida."/>
        <div className={` col-sm-2`} > 
            <img src={Bubble}  alt="pez en movimiento" className={styles.bubble}/>
        </div>
    </div>
         
  )
}

export default Info;