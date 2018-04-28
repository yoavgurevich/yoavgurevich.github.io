import React from 'react';
import ReactDOM from 'react-dom';

import Background from './components/background';
import Landing from './components/landing';
import JobList from './components/joblist';
import Contact from './components/contact';

import './stylesheets/main.scss'

ReactDOM.render(
  <Background>
    <Landing />
    <JobList />
    <Contact />
  </Background>,
  document.getElementById('app')
);

module.hot.accept();