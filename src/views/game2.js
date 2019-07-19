import React,{useState} from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import QuestionGame from '../components/QuestionGame/index'
import Modal from '../components/UIComponents/Modal'
import ButtonMed from '../components/UIComponents/ButtonMed'

function Game2 () {
 
const [showModal, toggleModal] = useState(false)
const [userInfo, setUserInfo] = useState({userName:'', password:''})

const buttons = <button type="button" className="btn btn-primary" onClick={() => {console.log(userInfo); handleCloseModal()}}>Submit</button>

function handleCloseModal () {
 toggleModal(false); 
 setUserInfo({userName:'', password:''})
}
     return (
      <div >
        <Navbar />
        <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta."/>
        <QuestionGame  />
 
        <Chatbot />
       
      </div>
    )
}

export default Game2;