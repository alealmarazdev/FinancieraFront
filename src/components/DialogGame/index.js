import React from 'react';

import AvatarW from '../../asset/image/avatarW.png'
import styles from './index.module.css'

function DialogGame () {
 
     return (
    <div className="d-flex">
        <img src={AvatarW} alt="avatar" className={styles.avatar}/>
        <div>
        <div className={styles.dialogobg}>
            <label className={styles.dialogo}>hola tienes una compañia <br/>de transporte privado, <br/>requieres que tus empleados <br/>tengan telefonia, escoge <br/>alguna de las siguientes <br/>opciones.</label>
        </div>

        </div>
        <div className="mx-auto d-table my-5">
            <h4 className="mb-3">¿Qué es un ingreso?</h4>
            <div class="input-group mb-3">
                <div class="input-group-prepend mr-2">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input " />
                    </div>
                </div>
                <label >Es todo objeto que ingresa al haber patrimonial</label>
                </div>
                <div class="input-group mb-3">
                <div class="input-group-prepend mr-2">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <label>Es todo objeto que ingresa al haber patrimonial</label>
                </div>
                <div class="input-group mb-3">
                <div class="input-group-prepend mr-2">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <label>Es todo objeto que ingresa al haber patrimonial</label>
                </div>
                <div class="input-group mb-3">
                <div class="input-group-prepend mr-2">
                    <div class="input-group-text">
                        <input type="checkbox" aria-label="Checkbox for following text input"/>
                    </div>
                </div>
                <label>Es todo objeto que ingresa al haber patrimonial</label>
                </div>
            </div>
      </div>
    )
}

export default DialogGame;