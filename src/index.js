import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';

import './stylesheets/main.scss'
import 'font-awesome/css/font-awesome.min.css';

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}