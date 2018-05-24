import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import ScrollButton from '../scrollButton';
import scrollToComponent from 'react-scroll-to-component';
 
export default Watch(class Wellpad extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <section 
                id='wellpad'
                ref={this.props.refsList.wellpad}
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} currentElm='wellpad' />
                <h1 className='dancing-script'>Wellpad.io</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='wellpad' />
            </section>
        );
    }
})