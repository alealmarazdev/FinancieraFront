import React from 'react'
import { Link } from 'react-router-dom'

import NavbarList from '../NavbarList'

import styles from './index.module.css';

function Navbar() {
  return (
    <nav className={`${styles.navFondo} navbar navbar-expand-lg navbar-light bg-light mb-5 pb-0`}>
      <Link className="navbar-brand font-weight-bolder" to="/">FISHNANCE</Link>
      <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarSupportedContent">
        <ul className="navbar-nav ml-auto mr-auto align-items-end">
          <li className="nav-item active mx-3">
            <Link className="nav-link pb-0" to="/curso">Aprender <span class="sr-only ">(current)</span></Link>
          </li>
          <li className="nav-item active mx-3">
            <Link className="nav-link pb-0" to="/blog">Artículos</Link>
          </li>
          <li className="nav-item active mx-3">
            <Link className="nav-link pb-0" to="/blog">Comunidad</Link>
          </li>

        </ul>
        <div className="nav-item py-2">
          <NavbarList />
        </div>
      </div>
    </nav>
  )
}

export default Navbar
