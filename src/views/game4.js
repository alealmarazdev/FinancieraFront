import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import TransportGame from '../components/TransportGame/index'

function Game4(props) {
  function handleDone() {
    props.history.push('/curso')
  }

  return (
    <div >
      <Navbar />
      <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta." />
      <TransportGame onDone={handleDone} />
      <Chatbot />
    </div>
  )
}

export default Game4
