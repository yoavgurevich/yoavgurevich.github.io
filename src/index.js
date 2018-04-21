import React from 'react';
import ReactDOM from 'react-dom';
import ScrollableAnchor from 'react-scrollable-anchor'

import Background from './components/background';
import Landing from './components/landing';

import './stylesheets/main.scss'

ReactDOM.render(
  <Background>
    <Landing />
    <ScrollableAnchor id={'engage-people'}>
      <div className='fsh vertical-align'>
        <h1>engage</h1>
      </div>
    </ScrollableAnchor>
    <ScrollableAnchor id={'wellpad'}>
      <div className='fsh vertical-align'>
          <h1>Wellpad.io</h1>
      </div>
    </ScrollableAnchor>
    <ScrollableAnchor id={'crkf'}>
      <div className='fsh vertical-align'>
        <h1>Chito-Ryu Karate & Fitness</h1>
      </div>
    </ScrollableAnchor>
    <ScrollableAnchor id={'cdot'}>
      <div className='fsh vertical-align'>
        <h1>CDOT</h1>
      </div>
    </ScrollableAnchor>
    <ScrollableAnchor id={'contact'}>
      <div className='fsh vertical-align'>
        <h1>Contact Me</h1>
      </div>
    </ScrollableAnchor>
  </Background>,
  document.getElementById('app')
);

module.hot.accept();