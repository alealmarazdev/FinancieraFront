import React from 'react';
import {Link} from 'react-router-dom'

import styles from './index.module.css';

function ButtonLink (props) {
  const {
    Title,
    To
  } = props;
  return (
    <div className="d-flex justify-content-center">
      <Link className= {`${styles.btn} mt-5 btn btn-lg btn-block button`} to={To}>{Title}</Link>
    </div>
  )
}
export default ButtonLink;

