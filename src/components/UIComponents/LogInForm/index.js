import React, {useState} from 'react'

import userApi from '../../../lib/apiUser'

import UserSignIn from '../../../asset/image/userSignIn.svg'
import styles from './index.module.css'

function LogInForm({onSucces}) {
  const [loginInfo, setLoginInfo] = useState({ email:'', password:'', result: {} })

  async function handleSubmit(ev) {
    ev.preventDefault()

    const {email, password} = loginInfo
    const result = await userApi.login({email, password})

    if (!result.success) {
      setLoginInfo({ ...loginInfo, result })
      return;
    }

    onSucces(result.payload)
  }

  return (
    <div>
      <img src={UserSignIn} alt='Inicio de sesion' className={`${styles.userImgSing}`} />

      <form className={`d-flex flex-column`} onSubmit={handleSubmit}>
        {loginInfo.result.error && (
          <div class="form-group">{loginInfo.result.error}</div>
        )}
        <div class="form-group">
          <label> Ingresa tu correo electronico.
            <input type="email" className={`form-control ${styles.formControl}`}
              aria-describedby="emailHelp" placeholder="Ingresa tu correo electronico."
              value={loginInfo.email} onChange={(ev) => setLoginInfo({ ...loginInfo, email: ev.target.value })}
            />
          </label>
          <small id="emailHelp" class="form-text text-muted">No compartiremos tu correo electronico con nadie.</small>
        </div>
        <div class="form-group">
          <label> Ingresa tu contraseña.
            <input type="password" className={`form-control ${styles.formControl}`} placeholder="Ingresa tu contraseña."
              value={loginInfo.password} onChange={(ev) => setLoginInfo({ ...loginInfo, password: ev.target.value })}
            />
          </label>
        </div>

        <div class="form-group form-check d-flex flex-column">
          <button type="submit" className="btn btn-success">Iniciar sesion.</button>
        </div>
      </form>
    </div>
  )
}
export default LogInForm;

