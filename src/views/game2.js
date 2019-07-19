import React from 'react';

import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import QuestionGame from '../components/QuestionGame/index'

function Game2(props) {
  function handleDone() {
    props.history.push('/curso')
  }

  return (
    <React.Fragment>
      <Navbar />
      <TitleGames title="PREGUNTA" subtitle="Escoge la respuesta correcta." />
      <QuestionGame onDone={handleDone} />

      <Chatbot />
    </React.Fragment>
  )
}

export default Game2
