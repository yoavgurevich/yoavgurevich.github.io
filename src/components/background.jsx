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
        addEventListener('hashchange', this.resolveBg);
    }
      
    componentWillUnmount() {
        removeEventListener('hashchange', this.resolveBg);
    }

    resolveBg(e) {
        if (location.hash !== this.state.lastHash) {
            let resolvedBackground = '';
    
            switch (location.hash) {
                case '#engage':
                    resolvedBackground = 'indianred';
                    break;
                case '#wellpad':
                    resolvedBackground = 'mediumseagreen';
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
                currentState.currentBg !== resolvedBackground ?
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
                className={this.state.currentBg}>
                {this.props.children}
            </div>
        );
    }
}