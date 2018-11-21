import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class CDOT extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <article
                id='cdot'
                ref={this.props.refsList.cdot}
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} />
                <svg width="650" height="250">
                    <g>
                        <text dx="162" dy="142" className="svg-xxl eb-garamond" fill="white">CD</text>
                        <circle cx="320" cy="115" r="35" fill="red" />
                        <circle cx="327" cy="114" r="27" fill="#400000" stroke="white" strokeWidth="3" />
                        <circle cx="330" cy="113" r="15" fill="#EEEEEE" stroke="red" strokeWidth="2" />
                        <text dx="359" dy="142" className="svg-xxl eb-garamond" fill="white">T</text>
                    </g>
                </svg>
                <ScrollButton direction='down' refsList={this.props.refsList} />
            </article>
        );
    }
}