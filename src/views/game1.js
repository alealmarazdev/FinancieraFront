import React, { Component } from 'react';
import Score from '../components/MemoramaContainer/Score/Score'
import Tablero from '../components/MemoramaContainer/Tablero/Tablero'
import TitleGames from '../components/UIComponents/TitleAndSubtitle'
import ButtonFullWidth from '../components/UIComponents/ButtonFullWidth'
import Navbar from '../components/UIComponents/Navbar'
import Modal from '../components/UIComponents/Modal'
import Chatbot from '../components/UIComponents/Chatbot'
import Footer from '../components/UIComponents/Footer' 

import construirBaraja from '../utils/ConstruirBaraja';

const getEstadoInicial = () => {
  const baraja = construirBaraja();

  return {
    baraja,
    parejaSeleccionada: [],
    estaComparando: false,
    numeroDeIntentos: 0,
    showModal: false,
  };
}

class Game1 extends Component {
  constructor(props) {
    super(props);
    this.state = getEstadoInicial();
  }

  seleccionarCarta(carta) {
    if (
      this.state.estaComparando ||
      this.state.parejaSeleccionada.indexOf(carta) > -1 ||
      carta.fueAdivinida
    ) {
      return;
    }

    const parejaSeleccionada = [...this.state.parejaSeleccionada, carta];
    this.setState({
      parejaSeleccionada
    });

    if (parejaSeleccionada.length === 2) {
      this.compararPareja(parejaSeleccionada);
    }
  }

  compararPareja(parejaSeleccionada) {
    this.setState({estaComparando: true});

    setTimeout(() => {
      const [primeraCarta, segundaCarta] = parejaSeleccionada;
      let baraja = this.state.baraja;

      if (primeraCarta.icono === segundaCarta.icono) {
        baraja = baraja.map((carta) => {
          if (carta.icono !== primeraCarta.icono) {
            return carta;
          }

          return {...carta, fueAdivinada: true};
        });
      }

      this.verificarSiHayGanador(baraja);
      this.setState({
        parejaSeleccionada: [],
        baraja,
        estaComparando: false,
        numeroDeIntentos: this.state.numeroDeIntentos + 1
      })
    }, 1000)
  }

  verificarSiHayGanador(baraja) {
    if (baraja.filter((carta) => !carta.fueAdivinada).length === 0) {
      this.setState({ showModal: true });
    }
  }

  resetearPartida() {
    this.setState(
      getEstadoInicial()
    );
  }

  closeModal = () => {
    this.setState({ showModal: false })
  }

  render() {
    const buttons = <ButtonFullWidth Title="Cerrar" handleClick={this.closeModal} />;

    return (
      <div className="App">
        <Navbar />
        <TitleGames title="ELIGE LA OPCION CORRECTA" subtitle="Haz los pares necesarios para continuar."/>
        <Chatbot />

        <Tablero
          baraja={this.state.baraja}
          parejaSeleccionada={this.state.parejaSeleccionada}
          seleccionarCarta={(carta) => this.seleccionarCarta(carta)}
        />
        <Score
          numeroDeIntentos={this.state.numeroDeIntentos}
          resetearPartida={() => this.resetearPartida()}
        />
        <Footer/>

        <Modal isOpen={this.state.showModal} title='Ganaste' buttons={buttons} onClose={this.closeModal}>
          {`Ganaste en ${this.state.numeroDeIntentos} intentos!`}
        </Modal>

      </div>
    );
  }
}

export default Game1;
