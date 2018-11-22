import React, { Component } from "react";

export default class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBg: ''
        };
        
        this.refsList = {
            landing: React.createRef(),
            joblist: React.createRef(),
            contact: React.createRef()
        };

        // this.resolveBg = this.resolveBg.bind(this);
    }

    // componentDidMount() {
    //     // this.resolveBg();
    //     addEventListener('mouseout mouseleave', (event) => event.preventDefault());
    // }
      
    // componentWillUnmount() {
    //     removeEventListener('mouseout mouseleave', this.resolveBg);
    // }

    // resolveBg() {
    //     if (location.hash !== this.state.lastHash) {
    //         let resolvedBackground = '';
    
    //         switch (location.hash) {
    //             case '#engage':
    //                 resolvedBackground = 'indianred';
    //                 break;
    //             case '#wellpad':
    //                 resolvedBackground = 'mediumseagreen';
    //                 break;
    //             case '#crkf':
    //                 resolvedBackground = 'darkslategrey';
    //                 break;
    //             case '#contact':
    //                 resolvedBackground = 'midnightblue';
    //                 break;
    //             default:
    //                 resolvedBackground = 'black';
    //                 break;
    //         }
    
    //         this.setState((currentState) => 
    //             currentState.currentBg !== resolvedBackground ?
    //                 {
    //                     currentBg: resolvedBackground,
    //                     lastHash: window.location.hash
    //                 } : null
    //         );
    //     }
    // }

    render() {
        const childrenWithProps = React.Children.map(this.props.children, (child) => {
            return React.cloneElement(child, {refsList: this.refsList});
        });        

        return (
            <div
                className={this.state.currentBg}>
                {childrenWithProps}
            </div>
        );
    }
}