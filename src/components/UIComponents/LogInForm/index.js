import React from 'react';
import {Link} from 'react-router-dom'

import UserSignIn from '../../../asset/image/userSignIn.svg'
import styles from './index.module.css';

function LogInForm(props) {
    const { valueEmail, onChangeEmail, valuePassword, onChangePassword } = props;
    return (
        <div>
            <img src={UserSignIn} alt='Inicio de sesion' className={`${styles.userImgSing}`} />
        <form className={`d-flex flex-column`}>
            
            <div class="form-group">
                <label >Ingresa tu correo electronico.
                <input type="email" className={`form-control ${styles.formControl}`} aria-describedby="emailHelp" placeholder="Ingresa tu correo electronico." value={valueEmail} onChange={onChangeEmail} />
                </label>
                <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo electronico con nadie.</small>
            </div>
            <div class="form-group">
                <label >Ingresa tu contraseña.
                <input type="password" className={`form-control ${styles.formControl}`} placeholder="Ingresa tu contraseña." value={valuePassword} onChange={onChangePassword} />
                </label>
            </div>
            <div class={`form-group form-check d-flex flex-column`}>
                <div> 
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Mostrar contraseña.</label>
                </div>
                <Link className=" mt-1"to="/">Recuperar contraseña.</Link>
            </div>

        </form> 
        </div>
    )
}
export default LogInForm;

