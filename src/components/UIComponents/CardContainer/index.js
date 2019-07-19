import React from 'react';

import Card from '../Card'

function CardContainer({topics}) {
  return (
    <div>
      <div class="row m-5">

        {topics.map((topic) => (
          <div class="col-sm-3 mb-5 ">
            <Card to={`/theme/Word/${topic.position}`}
              title={topic.name}
              subtitle={topic.description}
              image={`/assets/images/cards-curso/${topic.icon}`}
            />
          </div>
        ))}
      </div>
    </div>
  )
}

export default CardContainer
