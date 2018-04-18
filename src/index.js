import React from 'react';
import ReactDOM from 'react-dom';

import Landing from './components/landing';
import './stylesheets/main.scss'

const title = 'My Minimal React HMR Webpack Babel Setup';

ReactDOM.render(
  <div>
      <Landing />
  </div>,
  document.getElementById('app')
);

module.hot.accept();