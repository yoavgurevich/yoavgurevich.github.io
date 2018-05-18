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
                ref={this.props.passedRef}
                className='fsh vertical-align'>
                <ScrollButton direction='up' />
                <h1>Wellpad.io</h1>
                <ScrollButton direction='down' />
            </section>
        );
    }
})