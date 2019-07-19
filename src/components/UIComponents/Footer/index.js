import React, { useState } from 'react';
import apiUser from '../../../lib/apiUser';

/* import {Link} from 'react-router-dom' */
import SignInForm from '../../UIComponents/SignInForm/index'
import Modal from '../../UIComponents/Modal'
import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth';
import Instagram from '../../../asset/image/instagram.svg'
import Twitter from '../../../asset/image/twitter.svg'
import Fb from '../../../asset/image/fb.svg'

import styles from './index.module.css'

function Footer(props) {
  const [showModal, toggleModal] = useState(false)

  function handleUserInfo (userInfo) {
    apiUser.newUser({...userInfo})
    props.history.push('/curso')
}
  
  return (
    <div className={` mx-0 card text-center mt-5 ${styles.footer}`}>
      {/* <div class="card-header">
        Featured
      </div> */}
      <div className={`row d-flex mx-0`}>
        <div className={`card-body col-12 col-md-3`}>

          <h5 className={`card-title  ${styles.colorCyan}`}>Suscribete a nuestro Nesletter</h5>
          <p  className={`card-text  ${styles.colorCyan}`}>With supporting text below as a natural lead-in to additional content.</p>
          <ButtonFullWidth class="btn btn-primary btn-block" className={`${styles.ButonSize} ${styles.buttonFooter}`} Title="SUSCRIBIR" handleClick={() => { toggleModal(true) }} />
        </div>
        <div className={`card-body col-12 col-md-3`}>

          <p className={`card-text py-0 my-0 ${styles.colorCyan}`}>CONTACTO.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>SOBRE NOSOTROS.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>APRENDE.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>COLABORA.</p>
          <p className={`card-text py-0 my-0  ${styles.colorCyan}`}>JUEGA.</p>
          <p className={`card-text py-0 my-0 ${styles.colorCyan}`}>FAQ.</p>
        </div>
        <div className={`card-body col-12 col-md-3`}>
        <p class={`card-text py-0 ${styles.colorCyan}`}>POLITICA DE PRIVACIDAD.</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>TERMINOS Y CONDICIONES.</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>POLITICA DE DATOS.</p>
        </div>
        <div className={`card-body col-12 col-md-3`}>

      
          <p class={`card-text py-0 ${styles.colorCyan}`}>Calle Tonala numero 10</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>Colonia Roma</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>Delegacion Benito Juarez</p>
          <p class={`card-text py-0 ${styles.colorCyan}`}>CDMX, C.P. 06700</p>
        </div>
      </div>

      <div className={`row card-footer text-muted d-flex justify-content-between ${styles.bootomFooter}`}>

        <div className={`text-light col-12 col-md-6`}>Equipo Dinamita</div>

        <div className="col-12 col-md-6">
          <img src={Instagram} alt='instagram' className={`${styles.socialICon} mx-5`} />
          <img src={Twitter} alt='twitter' className={`${styles.socialICon} mx-5`} />
          <img src={Fb} alt='facebook' className={`${styles.socialICon} mx-5`} />
        </div>


      </div>
      <Modal isOpen={showModal} title='Registrate.' >
        <SignInForm  handleUserInfo={handleUserInfo} handleCloseModal={()=>{toggleModal(false)}}/>
      </Modal>
    </div>
  )
}

export default Footer
