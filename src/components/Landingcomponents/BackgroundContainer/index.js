import React, { useState } from 'react';
import apiUser from '../../../lib/apiUser';

import ButtonFullWidth from '../../../components/UIComponents/ButtonFullWidth';
/*  import ButtonMed from '../../../components/UIComponents/ButtonMed'; */
import TitleLanding from '../../UIComponents/TitleAndSubtitle-alignleft'
import Fish from '../../../asset/image/fish1.png'
import Modal from '../../UIComponents/Modal'
import styles from './index.module.css'
import SignInForm from '../../UIComponents/SignInForm/index'

function Header(props) {

  const [showModal, toggleModal] = useState(false)

  function handleUserInfo (userInfo) {
   apiUser.newUser({...userInfo})
   props.history.push('/curso')
  }
 
  return (
    //1st page - log in 
    <div className={`d-flex `}>
      <div className={`d-flex flex-column `}>
        <TitleLanding className=" col-sm-5 mt-0" titleBig=" ¿Estás listo para hacer realidad tus sueños?" titleMed="Aprende todo lo que necesitas sobre finanzas para emprender un negocio existo de una forma divertida." text="Regístrate y realiza el diágnostico financiero de tu negocio o idea ¡completamente gratis!" />
        <div className="d-flex justify-content-center">
          <ButtonFullWidth className={`${styles.ButonSize}`} Title="Jugar ahora!" handleClick={() => { toggleModal(true) }} />
        </div>
      </div>
      <div className={`${styles.bgPrincipal} col-sm-7`} >
        <img src={Fish} alt="pez en movimiento" className={styles.fish} />
      </div>
      <Modal isOpen={showModal} title='Registrate.'  >
        <SignInForm handleUserInfo={handleUserInfo} handleCloseModal={()=>{toggleModal(false)}}/>
      </Modal>
    </div>

  )
}

export default Header;