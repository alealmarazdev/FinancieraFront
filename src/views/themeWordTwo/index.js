import React from 'react';

import {Link} from 'react-router-dom'

import TitleGames from '../../components/UIComponents/TitleAndSubtitle'
import Navbar from '../../components/UIComponents/Navbar'
import Chatbot from '../../components/UIComponents/Chatbot'
import Crown from '../../asset/image/Icons/crown.svg'
import Next from '../../asset/image/Icons/Next.svg'

import styles from './index.module.css'

function ThemeWordTwo () {
     return (
      <div >
        <Navbar />
        <TitleGames title="Modelo de Negocio" subtitle="Los fundamentos de un buen proyecto"/>
        <div className={styles.bgGame}> </div>

        <Link className={styles.mapeado} to="/theme/themeOne"> 
          <h4 className="mb-0 text-center">Las 3 D's</h4>
          <img src={Crown} alt="nivel"/>
        </Link>

        <Link className={styles.mapeado1} to="/theme/themeOne">
          <h4 className="mb-0 text-center">Propuesta de valor</h4>
          <img src={Crown} alt="nivel"/>
        </Link>  
        <div className={styles.bgContinue}> </div>

        <Link className={styles.mapeado2} to="/theme/themeOne">
        <h4 className="mb-0 text-center">Business model canvas</h4>
          <img src={Crown} alt="nivel"/>
        </Link>
      
        <Link className={styles.mapeado3} to="/theme/themeOne">
        <h4 className="mb-0 text-center">MVP</h4>
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

export default ThemeWordTwo;