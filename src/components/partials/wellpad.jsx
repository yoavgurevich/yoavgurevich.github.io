import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import ScrollButton from '../scrollButton';
 
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
                <h1 className='rouge-script h0'>Wellpad.io</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='wellpad' />
            </section>
        );
    }
})