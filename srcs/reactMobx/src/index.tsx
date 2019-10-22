import 'ts-polyfill';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

const rootElement = document.getElementById('mount');

ReactDOM.render(
  <App />,
  rootElement
)
