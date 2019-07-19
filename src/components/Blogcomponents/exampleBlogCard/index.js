import React from 'react'


function ExampleBlogCard(props){
    const {
        title,
        bodyText,
        lastUpdate,
        imageSRC,
        alt,
    } = props;
    return (
        <div class="card mb-3" className="mx-3 my-0"/* style="max-width: 540px;" */>
        <div class="row no-gutters mb-1">
            <div class="col-md-4">
            <img src={imageSRC} class="card-img" alt={alt}/>
            </div>
            <div class="col-md-8">
            <div class="card-body">
                <h5 class="card-title">{title}</h5>
                <p class="card-text">{bodyText}</p>
                <p class="card-text"><small class="text-muted">{lastUpdate}</small></p>
            </div>
            </div>
        </div>
        </div>

)
}


export default ExampleBlogCard
