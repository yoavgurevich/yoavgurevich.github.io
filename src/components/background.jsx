import React, { Component } from "react";

export default class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBg: 'newgray',
            lastComponentId: '',
            jlPage: null
        };

        this.lastScrollPos = 0;
        
        this.refsList = {
            landing: React.createRef(),
            joblist: React.createRef(),
            contact: React.createRef()
        };

        this.resolveBg = this.resolveBg.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        addEventListener('scroll', this.handleScroll);
    }

    componentWillUnmount() {
        removeEventListener('scroll', this.handleScroll);
    }

    handleScroll() {
        if (document) {
            const offsets = document.body.getBoundingClientRect();
            const pageHeight = Math.max(document.body.scrollHeight, document.body.offsetHeight, 
                document.documentElement.clientHeight, document.documentElement.scrollHeight, document.documentElement.offsetHeight);
            let offsetRatio = Math.abs(offsets.top / pageHeight);

            if (this.lastScrollPos < offsets.top) {
                if (offsetRatio < 0.4 && offsetRatio >= 0.2) {
                    this.resolveBg('joblist', this.state.jlPage);
                } else if (offsetRatio < 0.7 && offsetRatio >= 0.4) {
                    this.resolveBg('contact');
                } else {
                    this.resolveBg('landing');
                }
            } else {
                if (offsetRatio > 0.3 && offsetRatio <= 0.6) {
                    this.resolveBg('joblist', this.state.jlPage);
                } else if (offsetRatio > 0.6) {
                    this.resolveBg('contact');
                } else {
                    this.resolveBg('landing');
                }
            }

            this.lastScrollPos = offsets.top;
        }
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
                        resolvedBackground = 'newgray';
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
                        lastComponentId: componentId,
                        jlPage: jlPage !== null ? jlPage : currentState.jlPage
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