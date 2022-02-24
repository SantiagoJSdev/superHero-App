import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import { RouterApp } from './router/RouterApp';

ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <RouterApp/>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);


reportWebVitals();
