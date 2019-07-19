import React from 'react'





function PrincipalCardLeft(props){
    const {
        title,
        bodyText,
        lastUpdate,
        imageSRC,
    } = props;

    return (
   <div class="card">
            <img src={imageSRC} class="card-img-top" alt="..."/>
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{bodyText}</p>
                <p class="card-text">
                    <small class="text-muted">{lastUpdate}</small>
                </p>
            </div>
      </div>
)
}


export default PrincipalCardLeft

