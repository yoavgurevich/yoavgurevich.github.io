import React, { Component } from 'react';
import scrollToComponent from 'react-scroll-to-component';

export default class ScrollButton extends Component {
    constructor(props) {
        super(props);

        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        if (this.props.refsList && this.props.currentElm) {
            const refKeys = Object.keys(this.props.refsList);

            const resolvedRef = this.props.direction === 'up' ?
                refKeys[refKeys.indexOf(this.props.currentElm) - 1] : refKeys[refKeys.indexOf(this.props.currentElm) + 1];

            scrollToComponent(this.props.refsList[resolvedRef].current);
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