import React, {useState} from 'react';

import LogoSpace from '../../components/UIComponents/Logospace'
import ButtonMed from '../../components/UIComponents/ButtonMed'
import MarkContainer from '../../components/Landingcomponents/MarksContainer'
import CardContainerNoImage from '../../components/UIComponents/CardContainerNoImage'
import Card from '../../components/UIComponents/Card'
import ImageContainer from '../../components/UIComponents/ImageContainer'
import TitleLanding from '../../components/UIComponents/TitleAndSubtitle-alignleft/index'
import ButtonFullWidth from '../../components/UIComponents/ButtonFullWidth/index'
import Modal from '../../components/UIComponents/Modal/index'
import LogInForm from '../../components/UIComponents/LogInForm/index'
import LandingFooter from '../../components/Landingcomponents/landingFooter/index';

import Girl from '../../asset/image/animation/meditationGirl.svg'


import styles from '../index/index.module.css'

import Devices from '../../asset/image/CardsImage/devices.svg'
import Challenge from '../../asset/image/CardsImage/idea.svg'



function Index(props) {

const [showModal, toggleModal] = useState(false)
const [userInfo, setUserInfo] = useState({userName:'', password:''})

const buttons = [<button type="button" className="btn btn-danger" onClick={() => {console.log(userInfo); handleCloseModal()}}>Cancelar.</button>, <button type="button" className="btn btn-success" onClick={() => {console.log(userInfo); handleCloseModal()}}>Iniciar sesion.</button> ]

function handleCloseModal (props) {
 toggleModal(false); 
 setUserInfo({userName:'', password:''})
}


  return (
    //1st page - log in 
    <div> 
    <div className="row d-flex m-0 p-0 w-100">
        <div className={`${styles.logo} col-7 col-md-6 `}>
              <LogoSpace className={`${styles.pru}`}/>
              <div className="d-flex flex-column justify-content-around center"> 
                 <TitleLanding className="col-sm-5" titleBig="Aprende finanzas de la forma más divertida" titleMed="Domina los conceptos escenciales, adminístrate, invierte o lleva las finanzas de tu propio negocio." />
                 <ButtonFullWidth Title="COMIENZA AHORA" handleClick={()=>{toggleModal(true)}} className={`${styles.buttonstart}`} /> 
              </div>  
             </div>
          <div className={`${styles.bgimage} content-fluid col-5 col-md-6 m-0`}>
              <div className={`${styles.Buttonmed}`}>
              <ButtonMed Title="Log-In" handleClick={()=>{toggleModal(true)}}/>
              </div>
              <div className="d-flex justify-content-center align-items-center">
              <img src={Girl}  alt="Chica" className={styles.girl}/>
              </div>
          </div>
     </div>
    <MarkContainer className= "mt-0" />
    <div className="container-fluid">
            <div className="row d-flex content-justify-center">
          <div className= {`${styles.BgquoteBg1} content-fluid col-12 col-md-3 p-0 m-0 mt-5`}></div>
          <div className= {`${styles.Bgquote} content-fluid col-12 col-md-6 p-0 m-0 mt-5`}></div>
          <div className= {`${styles.BgquoteBg2} content-fluid col-12 col-md-3 col-md3 p-0 m-0 mt-5`}></div>
          </div>
          </div>
     <CardContainerNoImage />
     <div className="container">
     <div className="row p-0 m-0">        
          <div className="col-sm-6 mb-5 ">
              <Card to="/theme/Word/One" title='Hola RETOS DIARIOS' subtitle="PON EN PRÁCTICA TUS CONOCIMIENTOS CON RETOS DIARIOS QUE HARÁN QUE LAS FINANZA SEAN TAN FÁCILES COMO RESPIRAR" alt="Challenge" image={Challenge}/>    
          </div> 
          <div class="col-sm-6 mb-5 ">
              <Card to="/theme/Word/Two" title='APRENDE EN CUALQUIER LUGAR' subtitle='USA FISHNANCE EN TU LAPTOP, CELULAR O TABLET DÓNDDE SEA Y A LA HORA QUE QUIERAS.' Lalt="Devices" image={Devices}/>
          </div>
        </div>
        </div>

    <div>
         <ImageContainer history={props.history}/>


        <LandingFooter history={props.history}/> 
        <Modal isOpen={showModal} title='Inicia sesion.' buttons={buttons} onClose={handleCloseModal}>
          <LogInForm valueEmail={userInfo.userName} onChangeEmail={(event)=>{
                  const userName = event.target.value
                  setUserInfo({...userInfo, userName})
                }} valuePassword={userInfo.password} onChangePassword={(event)=>{
                  const password = event.target.value
                  setUserInfo({...userInfo, password})
                }} />
              
        </Modal>
       </div>

   
  
    
    </div>

  )
}

export default Index;