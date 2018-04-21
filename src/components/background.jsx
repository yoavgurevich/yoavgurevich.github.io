import React, { Component } from "react";

export default class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBg: '',
            lastHash: ''
        };

        this.resolveBg = this.resolveBg.bind(this);
    }

    componentDidMount() {
        window.addEventListener('hashchange', this.resolveBg);
    }
      
    componentWillUnmount() {
        window.removeEventListener('hashchange', this.resolveBg);
    }

    resolveBg(e) {
        if (window.location.hash !== this.state.lastHash) {
            let resolvedBackground = '';
    
            switch (window.location.hash) {
                case '#engage-people':
                    resolvedBackground = 'red';
                    break;
                case '#wellpad':
                    resolvedBackground = 'beige';
                    break;
                case '#crkf':
                    resolvedBackground = 'darkslategrey';
                    break;
                case '#cdot':
                default:
                    resolvedBackground = 'black';
                    break;
            }
    
            this.setState((currentState) => 
                currentState.currentBg !== resolvedBackground && resolvedBackground.length ?
                    {
                        currentBg: resolvedBackground,
                        lastHash: window.location.hash
                    } : null
            );
        }

    }

    render() {
        return (
            <div
                onScroll={this.resolveBg}
                className={this.state.currentBg}>
                {this.props.children}
            </div>
        );
    }
}