import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Wellpad extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <article 
                id='wellpad'
                ref={this.props.refsList.wellpad}
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} />
                <h1 className='rouge-script h0'>Wellpad.io</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} />
            </article>
        );
    }
}