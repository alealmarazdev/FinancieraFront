import React from 'react';

import ButtonLink from '../ButtonLink'

function ContentVideo () {
     return (
      <div> 
        <div className="d-flex justify-content-center">
            <div className="w-75 text-justify mb-1 mt-0">
              <div class="embed-responsive embed-responsive-16by9">
                  <iframe class="embed-responsive-item" title="FinanceVideo" src="https://www.youtube.com/embed/zpOULjyy-n8?rel=0" allowfullscreen name="classVideo"></iframe>
              </div>
            </div>
        </div>
        <ButtonLink Title="¡Empieza a jugar!" To="/gameOne"/>
      </div>
    )
}

export default  ContentVideo;