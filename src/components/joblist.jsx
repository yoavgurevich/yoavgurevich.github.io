import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlipPage from 'react-flip-page';

import Engage from './partials/engage';
import Wellpad from './partials/wellpad';
import CRKF from './partials/crkf';
import CDOT from './partials/cdot';

export default class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {currentBg: 'indianred'};

        this.handleEnterViewport.bind(this);
        this.handleExitViewport.bind(this);
    }

    resolveBg(i, d) {
        let resolvedBackground = '';

        switch (i) {
            case 0:
                resolvedBackground = 'indianred';
                break;
            case 1:
                resolvedBackground = 'mediumseagreen';
                break;
            case 2:
                resolvedBackground = 'darkslategrey';
                break;
            case 3:
                resolvedBackground = 'midnightblue';
                break;
            default:
                resolvedBackground = 'black';
                break;
        }

        this.setState((currentState) => 
            currentState.currentBg !== resolvedBackground ?
                {
                    currentBg: resolvedBackground
                } : null
        );
    }

    handleEnterViewport (watcher) {
        if (location.hash !== watcher.watchItem.id) {
            location.hash = watcher.watchItem.id
        }
    }

    handleExitViewport (watcher) {
        switch(watcher.watchItem.id) {
            case 'engage':
                if (document.body.scrollTop === 0 && location.hash.indexOf('engage') !== -1) {
                    location.hash = 'landing';
                }
                break;
            case 'cdot':
                if ((innerHeight + scrollY) >= document.body.offsetHeight && location.hash.indexOf('cdot') !== -1) {
                    location.hash = 'contact';
                }
                break;
        }
    }

    render() {
        return (
            <FlipPage
                orientation='horizontal'
                pageBackground={this.state.currentBg}
                flipOnTouch='true'
                onStartPageChange={(pageIndex, direction) => this.resolveBg(pageIndex, direction)}
                animationDuration={400}
                perspective="40em"
                width={window.innerWidth}
                height={window.innerHeight}>
                <Engage
                    refsList={this.props.refsList}
                    fullyEnterViewport={this.handleEnterViewport}
                    exitViewport={this.handleExitViewport} />
                <Wellpad
                    refsList={this.props.refsList}
                    fullyEnterViewport={this.handleEnterViewport} />
                <CRKF
                    refsList={this.props.refsList}
                    fullyEnterViewport={this.handleEnterViewport} />
                <CDOT
                    refsList={this.props.refsList}
                    fullyEnterViewport={this.handleEnterViewport}
                    exitViewport={this.handleExitViewport} />
            </FlipPage>
        );
    }
}