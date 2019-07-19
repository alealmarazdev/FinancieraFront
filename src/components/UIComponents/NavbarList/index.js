import React from 'react'
import medalla from '../../../asset/image/Icons/medal.svg'
import trofeo from '../../../asset/image/Icons/trophy.svg'
import profile from '../../../asset/image/profile.svg'
import styles from './index.module.css';

function NavbarList(props) {
    const {
      userName,
      themeNumber,
      score
    } = props;
    return (
    <div className={`${styles.usuarioContainer}  d-flex flex-row mx-0`}>
        <aside className={`${styles.usuarioRow} d-flex flex-column `}>
            <section className={`${styles.usuarioName} font-weight-bolder`}>
                {userName}
            </section>
            <section className={`${styles.usuarioName} d-flex flex-row`}>
                 <aside className={`${styles.themeArchivement} d-flex flex-row `}>
                    <div className={`${styles.numberTheme} font-weight-bold d-flex justify-content-end`}>
                        {themeNumber}
                    </div>
                    <div className={`${styles.imgTheme}  d-flex justify-content-center`}>
                    <img src={trofeo} className="" alt="trofeo"/>
                    </div>
                </aside>
                <aside className={`${styles.levelArchivement} d-flex flex-row `}>
                    <div className={`${styles.numberLevel} font-weight-bold d-flex justify-content-end`}>
                        {score}
                    </div>
                    <div className={`${styles.imgLevel}  d-flex justify-content-center`}>
                    <img src={medalla} className="" alt="medalla"/>
                    </div>
                </aside>
            </section>

        </aside>
        <aside className={`${styles.usuarioRow2}  d-flex justify-content-center `}>
            <img src={profile} className={`${styles.profileImage} rounded-circle w-100`} alt="perfil"/>

        </aside> 

    </div>
)
}


export default NavbarList

