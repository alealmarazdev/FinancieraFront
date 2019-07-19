import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import DialogGame from '../components/DialogGame/index'


function Game3 () {
 
     return (
      <div >
        <Navbar />
        <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta."/>
        <DialogGame />
        <Chatbot />

      </div>
    )
}

export default Game3;