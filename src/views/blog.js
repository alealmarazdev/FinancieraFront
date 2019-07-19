import React from 'react';

import Navbar from '../components/UIComponents/Navbar'
import Chatbot from '../components/UIComponents/Chatbot'
import ContainerBlog from '../components/Blogcomponents/containerBlog'


function Blog () {
     return (
      <div >
        <Navbar />
        <ContainerBlog />
        <Chatbot />
        </div>
    )
}

export default Blog;