import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class CRKF extends Component {
    constructor(props) {
        super(props)
    }
 
    render () {
        return (
            <article 
                id='crkf' 
                ref={this.props.refsList.crkf}
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} />
                <h1 className='aldrich text-center'>
                    実 道 空 手
                    <br />
                    Chito-Ryu Karate
                </h1>
                <ScrollButton direction='down' refsList={this.props.refsList} />
            </article>
        );
    }
}