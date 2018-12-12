import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Engage extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        let resolvedContent = this.props.currentPage == 0 ? (
            <div className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} resolveBg={this.props.resolveBg} />
                <h1>engage</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} resolveBg={this.props.resolveBg} />
            </div>
        ) : <div></div>;

        return (
            <article
                id='engage'>
                {resolvedContent}
            </article>
        );
    }
}