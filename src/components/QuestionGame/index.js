import React, {useState} from 'react';

import apiUser from '../../lib/apiUser'

import Modal from './../UIComponents/Modal'
import Button from '../UIComponents/ButtonFullWidth'


const questionData = {
  theme: '5d31f2c78f473d0070286970',
  question: '¿Qué es un ingreso?',
  options: [
      'Es todo objeto que ingresa al haber patrimonial',
      'Es todo objeto que ingresa al haber patrimonial',
      'Es todo objeto que ingresa al haber patrimonial',
      'Es todo objeto que ingresa al haber patrimonial',
  ],
  answer: 3,
}


function QuestionGame({onDone}) {
  const [showModal, setShowModal] = useState(false)

  function reviewAnswer(ev) {
    const optSelected = parseInt(ev.target.value)

    if (optSelected === questionData.answer) {
      setShowModal(true)
    }
  }

  async function handleAccept() {
    await apiUser.updateScore(questionData.theme)
    onDone()
  }

  return (
    <React.Fragment>
      <div className="mx-auto d-table my-5">
        <h4 className="mb-3">{questionData.question}</h4>

        {questionData.options.map((option, indx) => (
          <label key={indx} class="input-group">
            <div class="input-group-prepend">
              <div class="input-group-text">
                <input type="radio" name="answer" value={indx + 1} onChange={reviewAnswer}/>
              </div>
            </div>
            <span class="form-control">{option}</span>
          </label>
        ))}
      </div>

      <Modal isOpen={showModal} title='¡Felicidades!' buttons={
        <Button Title="Aceptar" handleClick={handleAccept}/>
      }
      classes={{ header: 'text-success' }}
      >
        <strong>Sigue jugando para seguir aprendiendo y ganar muchos puntos de experiencia</strong>
      </Modal>
    </React.Fragment>
  )
}

export default QuestionGame
