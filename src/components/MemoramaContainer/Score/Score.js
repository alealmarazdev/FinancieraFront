import React, { Component } from 'react';
import './Header.css';

 class Score extends Component {
  render() {
    return (
      <header> 
        
        <div className="titulo">
          Intentos: {this.props.numeroDeIntentos}
        </div>
        <button className="boton-reiniciar" onClick={this.props.resetearPartida}>
            Reiniciar
        </button>
      </header>
    );
  }
};
export default Score