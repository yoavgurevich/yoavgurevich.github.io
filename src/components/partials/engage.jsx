import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import ScrollButton from '../scrollButton';
 
export default Watch(class Engage extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <section 
                id='engage'
                className='fsh vertical-align'
                ref={this.props.refsList.engage}>
                <ScrollButton direction='up' refsList={this.props.refsList} currentElm='engage' />
                <h1>engage</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='engage' />
            </section>
        );
    }
})