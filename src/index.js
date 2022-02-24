import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter } from 'react-router-dom';


import reportWebVitals from './reportWebVitals';
import { RouterApp } from './router/RouterApp';
import { store } from './store/store';

ReactDOM.render(
  <Provider store = { store }>
    <BrowserRouter>
    <RouterApp/>
    </BrowserRouter>
  </Provider>,
  document.getElementById('root')
);


reportWebVitals();
