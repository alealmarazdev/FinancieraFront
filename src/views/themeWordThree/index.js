import React from 'react';

import {Link} from 'react-router-dom'

import TitleGames from '../../components/UIComponents/TitleAndSubtitle'
import Navbar from '../../components/UIComponents/Navbar'
import Chatbot from '../../components/UIComponents/Chatbot'
import Crown from '../../asset/image/Icons/crown.svg'
import Next from '../../asset/image/Icons/Next.svg'

import styles from './index.module.css'

function ThemeWordThree () {
     return (
      <div >
        <Navbar />
        <TitleGames title="Administra tus finanzas " subtitle="¿Cómo no morir siendo adulto?"/>
        <div className={styles.bgGame}> </div>

        <Link className={styles.mapeado} to="/theme/themeTwo"> 
          <h4 className="mb-0 text-center">Regla 50-20-30</h4>
          <img src={Crown} alt="nivel"/>
        </Link>

        <Link className={styles.mapeado1} to="/theme/themeOne">
          <h4 className="mb-0 text-center">Presupuestos</h4>
          <img src={Crown} alt="nivel"/>
        </Link>  
        <div className={styles.bgContinue}>Las 3 cuentas</div>

        <Link className={styles.mapeado2} to="/theme/themeOne">
        <h4 className="mb-0 text-center">Disciplina</h4>
          <img src={Crown} alt="nivel"/>
        </Link>
      
        <Link className={styles.mapeado3} to="/theme/themeOne">
        <h4 className="mb-0 text-center">Inversiones</h4>
          <img src={Crown} alt="nivel"/>
        </Link>

        <Link className={styles.mapeado4} to="/curso">
        <h4 className="mb-0 text-center">Siguiente tema.</h4>
          <img src={Next} alt="nivel"/>
        </Link>
         
        <Chatbot />

      </div>
    )
}

export default ThemeWordThree;