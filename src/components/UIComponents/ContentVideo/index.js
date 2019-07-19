import React from 'react';

import ButtonLink from '../ButtonLink'

function ContentVideo (props) {
     return (
      <div> 
        <div className="d-flex justify-content-center">
            <div className="w-75 text-justify mb-1 mt-0">
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" title="FinanceVideo" src={`https://www.youtube.com/embed/${props.id}`} allowfullscreen name="classVideo"></iframe>
              </div>
            </div>
        </div>
        <ButtonLink Title="¡Empieza a jugar!" To={props.to}/>
      </div>
    )
}

export default  ContentVideo;