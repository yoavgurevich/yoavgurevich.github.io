import React from 'react';
import ReactDOM from 'react-dom';

import App from './pages/App';

import 'swiper/css/swiper.min.css';
import './stylesheets/main.scss'

ReactDOM.render(
  <App />,
  document.getElementById('app')
);

if (module.hot) {
  module.hot.accept();
}