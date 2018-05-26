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
                <svg width="650" height="250">
                    <text x="178" y="140" class="h0 sanchez" fill="white">CD</text>
                    <circle cx="320" cy="115" r="35" fill="red" />
                    <circle cx="327" cy="114" r="27" fill="#400000" stroke="white" stroke-width="3" />
                    <circle cx="330" cy="113" r="15" fill="#EEEEEE" stroke="red" stroke-width="2" />
                    <text x="359" y="140" class="h0 sanchez" fill="white">T</text>
                </svg>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='cdot' />
            </section>
        );
    }
})