import React, {Component} from 'react';
import styles from './index.module.css';
 import FlipCard from '@kennethormandy/react-flipcard'
 import '@kennethormandy/react-flipcard/dist/Flipcard.css'

 class Carta extends Component {
  render() {
    return (
      <div className={styles.carta} onClick={this.props.seleccionarCarta}>
         <FlipCard 
          flipped={this.props.estaSiendoComparada || this.props.fueAdivinada}
          disabled={false} type="revolving-door"
        >  
          <div className={styles.portada}></div>
          <div className={styles.contenido}>
            <i className={`fa ${this.props.icono} fa-5x`}></i>
          </div>
         </FlipCard>  
      </div>
    )
  }  
};
export default Carta