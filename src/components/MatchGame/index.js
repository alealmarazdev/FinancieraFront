import React from 'react';
import styles from './index.module.css';
import Arrendamiento from '../../asset/image/arrendamiento.svg';
import Concierto from '../../asset/image/concierto.svg';
import Compraventa from '../../asset/image/compraventa.svg';
import Servicios from '../../asset/image/servicios.svg';

function MatchGame () {
 
     return (
      <div className="mx-auto my-5">
          <h4 className="mb-3">¿Cual es el impuesto que grava las siguientes imagenes?</h4>
          <div className="d-flex"> 
          <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input " />
                </div>
            </div>
            <label >Impuesto al Valor Agregado</label>
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
            </div>
            <label>Tenencia</label>
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
            </div>
            <label>Nomina</label>
            </div>
            <div class="input-group mb-3">
            <div class="input-group-prepend mr-2">
                <div class="input-group-text">
                    <input type="checkbox" aria-label="Checkbox for following text input"/>
                </div>
            </div>
            <label>Predial</label>
            </div>
        </div>

        <div className="d-flex justify-content-around mx-5"> 
            <div className={` col-sm-3 d-flex justify-content-center`} > 
                <div> 
                    <img src={Arrendamiento}  alt="impuesto en movimiento" className={styles.tax1}/>
                    <p className={`${styles.tax1} text-center`}>Arrendamiento</p>
                </div>
            </div>
            <div className={`col-sm-3 d-flex justify-content-center`} > 
                <div> 
                    <img src={Concierto}  alt="impueso en movimiento" className={styles.tax2}/>
                    <p className={`${styles.tax2} text-center`}>Conciertos</p>
                </div>
            </div>
            <div className={`col-sm-3 d-flex justify-content-center`} > 
                <div> 
                    <img src={Compraventa}  alt="impuesto en movimiento" className={styles.tax3}/>
                    <p className={`${styles.tax3} text-center`}>Venta de bienes</p>
                </div>
            </div>
            <div className={`col-sm-3 d-flex justify-content-center`} > 
             <div>
                <img src={Servicios}  alt="impuesto en movimiento" className={styles.tax4}/>
                <p className={`${styles.tax4} text-center`}>Prestacion de servicios</p>
                </div>
            </div>
            </div>
      </div>
    )
}

export default MatchGame;
