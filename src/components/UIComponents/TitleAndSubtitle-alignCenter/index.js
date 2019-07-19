import React from 'react';

import styles from './index.module.css';

function TitleCenter(props) {
  const {
    titleBig,
    titleMed,
    text,
  } = props;
  return (
    <div>
      <div>
         <h1 className= "text-center">
          { titleBig }
        </h1>
        <h3 className={`${styles.title} text-center`}>
          {titleMed}
        </h3>
        <h3 className={`${styles.text} text-center`}>
          { text }
        </h3>      
      </div>
    </div>
  )
}

export default TitleCenter;