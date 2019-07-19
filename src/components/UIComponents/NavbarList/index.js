import React, {useState, useEffect} from 'react'

import apiUser from '../../../lib/apiUser';

import medalla from '../../../asset/image/Icons/medal.svg'
import avatarMale from '../../../asset/image/profile.svg'
import avatarFemale from '../../../asset/image/avatarW.png'
import styles from './index.module.css';

function NavbarList() {
  const [user, setUser] = useState({ fullName: '', score: 0 })

  useEffect(() => {
    async function getUserData() {
      const userInfo = await apiUser.getUser()
      setUser(userInfo.payload)
    }

    getUserData()
  }, [])

  const avatar = (user.gender !== 'female') ? avatarMale : avatarFemale

  return (
    <div className={`${styles.usuarioContainer}  d-flex flex-row mx-0`}>
      <aside className={`${styles.usuarioRow} d-flex flex-column `}>
        <section className={`${styles.usuarioName} font-weight-bolder`}>
          {user.fullName}
        </section>
        <section className={`${styles.usuarioName} d-flex flex-row`}>
          <aside className={`${styles.levelArchivement} d-flex flex-row `}>
            <div className={`${styles.numberLevel} font-weight-bold d-flex justify-content-end`}>
              {user.score}
            </div>
            <div className={`${styles.imgLevel}  d-flex justify-content-center`}>
              <img src={medalla} className="" alt="medalla" />
            </div>
          </aside>
        </section>
      </aside>

      <aside className={`${styles.usuarioRow2}  d-flex justify-content-center `}>
        <img src={avatar} className={`${styles.profileImage} rounded-circle w-100`} alt="perfil" />
      </aside>
    </div>
  )
}

export default NavbarList
