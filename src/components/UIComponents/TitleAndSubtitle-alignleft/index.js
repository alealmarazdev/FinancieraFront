import React from 'react';

import styles from './index.module.css';

function TitleLanding(props) {
  const {
    titleBig,
    titleMed,
    text,
  } = props;
  return (
    <div>
      <div>
         <h1 className= "text-left">
          { titleBig }
        </h1>
        <h3 className={`${styles.title} text-left`}>
          {titleMed}
        </h3>
        <h3 className={`${styles.text} text-left`}>
          { text }
        </h3>      
      </div>
    </div>
  )
}

export default TitleLanding;