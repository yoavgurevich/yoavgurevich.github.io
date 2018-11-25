import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Engage extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <article
                id='engage'
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} resolveBg={this.props.resolveBg} />
                <h1>engage</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} resolveBg={this.props.resolveBg} />
            </article>
        );
    }
}