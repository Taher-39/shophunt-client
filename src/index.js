import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import './bootstrap.min.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { Provider } from 'react-redux';
import store from './Redux/Store/Store'
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('root')
);

reportWebVitals();
