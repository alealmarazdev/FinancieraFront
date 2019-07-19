import React from 'react'
import styles from './index.module.css';
import { Link } from 'react-router-dom'

function LogoSpace(){

    return (
        <nav className="mt-3">
        <Link className= {`${styles.logo} navbar-brand font-weight-bolder`} to="/">FISHNANCE</Link>
      </nav>
)
}


export default LogoSpace

