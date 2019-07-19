import React from 'react';

import {Link} from 'react-router-dom'

import TitleGames from '../../components/UIComponents/TitleAndSubtitle'
import Navbar from '../../components/UIComponents/Navbar'
import Chatbot from '../../components/UIComponents/Chatbot'
import Crown from '../../asset/image/Icons/crown.svg'
import Next from '../../asset/image/Icons/Next.svg'

import styles from './index.module.css'

function ThemeWordFive () {
     return (
      <div >
        <Navbar />
        <TitleGames title="¿Socios o inversionistas?" subtitle="¿Qué modelo es mejor para ti?"/>
        <div className={styles.bgGame}> </div>

        <Link className={styles.mapeado} to="/theme/themeOne"> 
          <h4 className="mb-0 text-center">Nichos de mercado</h4>
          <img src={Crown} alt="nivel"/>
        </Link>

        <Link className={styles.mapeado1} to="/theme/themeOne">
          <h4 className="mb-0 text-center">Benchmarking</h4>
          <img src={Crown} alt="nivel"/>
        </Link>  
        <div className={styles.bgContinue}>Océanos rojos y azules</div>

        <Link className={styles.mapeado2} to="/theme/themeOne">
        <h4 className="mb-0 text-center">Validaciónes</h4>
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

export default ThemeWordFive;