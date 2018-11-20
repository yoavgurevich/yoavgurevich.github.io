import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import ScrollButton from '../scrollButton';
 
export default Watch(class Engage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flipClass: ''
        }

        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        this.setState((prevState, props) => {
            return {
                flipClass: prevState.flipClass.length ? '' : ' flip'
            }
        });
    }
 
    render () {
        return (
            <article
                id='engage'
                ref={this.props.refsList.engage}
                className='fsh vertical-align'>
                <ScrollButton direction='up' refsList={this.props.refsList} currentElm='engage' />
                <h1>engage</h1>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='engage' />
            </article>
        );
    }
})