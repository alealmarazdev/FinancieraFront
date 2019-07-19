import React from 'react'



function MiniExampleBlogCard(props){
  const {
    title,
    bodyText,
    lastUpdate,
} = props;

    return (
        <div className="card mx-3 mb-1">
          
            <div class="card">
            <div class="card-body">
              <h5 class="card-title">{title}</h5>
              <p class="card-text">{bodyText}</p>
              <p class="card-text"><small class="text-muted">{lastUpdate}</small></p>
            </div>
          </div>
        </div>

)
}


export default MiniExampleBlogCard
