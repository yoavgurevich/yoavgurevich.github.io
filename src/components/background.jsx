import React, { Component } from "react";

const INTERSECTION_THRESHOLD = 0.66;

export default class Background extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentBg: 'newgray',
            lastComponentId: '',
            jlPage: null
        };
        
        this.refsList = {
            landing: React.createRef(),
            joblist: React.createRef(),
            contact: React.createRef()
        };

        this.resolveBg = this.resolveBg.bind(this);
        this.handleScroll = this.handleScroll.bind(this);
    }

    componentDidMount() {
        const observer = new IntersectionObserver(this.handleScroll, { threshold: INTERSECTION_THRESHOLD });
        Object.keys(this.refsList).forEach(refKey => observer.observe(this.refsList[refKey].current));
    }

    handleScroll(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting && Math.abs(INTERSECTION_THRESHOLD - entry.intersectionRatio) <= 0.1) {
                this.resolveBg(entry.target.id, entry.target.id === 'joblist' ? this.state.jlPage : null);
            }
        });
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
        const childrenWithProps = React.Children.map(this.props.children, (child) => 
            React.cloneElement(child, {
                refsList: this.refsList,
                currentBg: this.state.currentBg,
                resolveBg: this.resolveBg
            }));

        return (
            <div
                className={this.state.currentBg}>
                {childrenWithProps}
            </div>
        );
    }
}