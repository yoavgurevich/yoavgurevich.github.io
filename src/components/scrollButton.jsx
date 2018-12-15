import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

export default class ScrollButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.refsList) {
            switch(this.props.direction) {
                case 'up':
                case 'down':
                    let resolvedRef = this.props.direction === 'up' ?
                        'landing' : 'contact';
        
                    if (this.props.currentElm) {
                        resolvedRef = 'joblist'
                    }
        
                    scrollToComponent(this.props.refsList[resolvedRef].current);
                    break;
            }
        }
    }

    render() {
        return (
            <div onClick={this.handleClick} className='slide-link-container'>
                <h2>
                    <i className={'fa fa-2x fa-angle-double-' + this.props.direction}></i>
                </h2>
            </div>
        );
    }
}