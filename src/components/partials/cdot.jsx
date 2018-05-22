import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import ScrollButton from '../scrollButton';
 
export default Watch(class CDOT extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <section 
                id='cdot'
                ref={this.props.refsList.cdot}
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} currentElm='cdot' />
                <h1>CDOT</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='cdot' />
            </section>
        );
    }
})