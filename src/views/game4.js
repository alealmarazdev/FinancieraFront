import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import TransportGame from '../components/TransportGame/index'


function Game4 () {
 
     return (
      <div >
        <Navbar />
        <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta."/>
        <TransportGame />
        <Chatbot />

      </div>
    )
}

export default Game4;