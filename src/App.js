import React from 'react';
import { BrowserRouter } from 'react-router-dom'

import './app.css';

import Router from './Router';

const App = () => (
  <BrowserRouter>
    <section id="app">  
      <Router />
    </section>
  </BrowserRouter>
)

export default App;
