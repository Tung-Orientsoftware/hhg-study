import React from 'react';
import ReactDOM from 'react-dom';
import 'assets/scss/index.scss';
import reportWebVitals from './reportWebVitals';
import { renderRoutes } from 'routes';

ReactDOM.render(
  <React.Fragment>
    {renderRoutes()}
  </React.Fragment>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();