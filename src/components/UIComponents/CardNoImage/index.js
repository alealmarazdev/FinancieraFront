import React from 'react';




function CardNoImage (props) {
    const {
        title,
        subtitle
    } = props;
    return (
        <div class="col-sm-4 my-5 ">
    <div class="card">
      <div class="card-body">
        <h5 class="card-title text-center my-2 fontbolder">{title}</h5>
        <p class="card-text text-center my-2">{subtitle}</p>
  
      </div>
    </div>
    </div>
)
}
export default CardNoImage