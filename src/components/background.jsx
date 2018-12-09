import React, { Component } from "react";

export default class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBg: 'black',
            lastComponentId: ''
        };
        
        this.refsList = {
            landing: React.createRef(),
            joblist: React.createRef(),
            contact: React.createRef()
        };

        this.resolveBg = this.resolveBg.bind(this);
    }

    resolveBg(componentId, jlPage = null) {
        if (componentId !== this.state.lastComponentId || jlPage !== null) {
            let resolvedBackground = '';

            if (!jlPage) {
                switch (componentId) {
                    case 'joblist':
                        resolvedBackground = 'indianred';
                        break;
                    case 'contact':
                        resolvedBackground = 'midnightblue';
                        break;
                    default:
                        resolvedBackground = 'black';
                        break;
                }
            } else {
                const bgMapping = ['engage', 'wellpad', 'crkf', 'cdot'];

                switch (bgMapping[jlPage]) {
                    case 'engage':
                        resolvedBackground = 'indianred';
                        break;
                    case 'wellpad':
                        resolvedBackground = 'mediumseagreen';
                        break;
                    case 'crkf':
                        resolvedBackground = 'darkslategrey';
                        break;
                    default:
                        resolvedBackground = 'maroon';
                        break;
                }
            }
    
            this.setState((currentState) => 
                currentState.currentBg !== resolvedBackground ?
                    {
                        currentBg: resolvedBackground,
                        lastComponentId: componentId
                    } : null
            );
        }
    }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {
                refsList: this.refsList,
                currentBg: this.state.currentBg,
                resolveBg: this.resolveBg
            });
        });        

        return (
            <div
                className={this.state.currentBg}>
                {childrenWithProps}
            </div>
        );
    }
}