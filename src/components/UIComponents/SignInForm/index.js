import React, { useState}  from 'react';
import {Link} from 'react-router-dom'

import UserSignIn from '../../../asset/image/userSignIn.svg'
import styles from './index.module.css';

function SignInForm({handleCloseModal, handleUserInfo}) {
      const [state, setState] =useState({ email:'',password:''})

  function onChange(event) {
    const { value, name } = event.target;
    setState({ ...state, [name]: value});
  }

  function onSubmit(event){
      event.preventDefault(); 
      handleUserInfo(state)
  }
  function onCancel(){
      setState({ email:'',password:''})
      handleCloseModal()
  }

    return (
        <div>
            <img src={UserSignIn} alt='Inicio de sesion' className={`${styles.userImgSing}`} />
        <form className={`d-flex flex-column`} onSubmit={onSubmit}>
       
            <div class="form-group">
                <label >Ingresa tu correo electronico.
                <input type="email" className={`form-control ${styles.formControl}`} aria-describedby="emailHelp" placeholder="Ingresa tu correo electronico." name='email' value={state.email} onChange={onChange} />
                </label>
                <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo electronico con nadie.</small>
            </div>
            <div class="form-group">
                <label >Ingresa tu contraseña.
                <input type="password" className={`form-control ${styles.formControl}`} placeholder="Ingresa tu contraseña." name='password' value={state.password} onChange={onChange} />
                </label>
            </div>
            
            <div class={`form-group form-check d-flex flex-column`}>
                <div> 
                <input type="checkbox" class="form-check-input" id="exampleCheck1" />
                <label class="form-check-label" for="exampleCheck1">Mostrar contraseña.</label>
                </div>
                <Link className=" mt-1"to="/">Recuperar contraseña.</Link>
                
            </div>
            <div className="d-flex justify-content-between mx-2 mb-5"> 
                <button type="button" className="btn btn-danger" onClick={onCancel} >Cancelar.</button>
                <button type="submit" className="btn btn-success" >Registrate.</button>
            </div>
        </form> 
        </div>
    )
}
export default SignInForm;

