import React from 'react';

import Instagram from '../../../asset/image/instagram.svg'
import Twitter from '../../../asset/image/twitter.svg'
import Fb from '../../../asset/image/fb.svg'

import styles from './index.module.css'

function landingFooter() {
  return (
    <div className="container-fluid">
    <div className={`${styles.bottomFooter} row d-flex justify-content-between align-items-center`}>
    <div className={`text-light col-12 col-md-6 text-center`}>Equipo Dinamita</div>
        <div className="col-12 col-md-6">
          <img src={Instagram} alt='instagram' className={`${styles.socialICon} mx-5`} />
          <img src={Twitter} alt='twitter' className={`${styles.socialICon} mx-5`} />
          <img src={Fb} alt='facebook' className={`${styles.socialICon} mx-5`} />
        </div>
    </div>
    </div>
  )
}

export default landingFooter
