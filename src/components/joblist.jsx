import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';

import Engage from './partials/engage';
import Wellpad from './partials/wellpad';
import CRKF from './partials/crkf';
import CDOT from './partials/cdot';

export default class JobList extends Component {
    constructor(props) {
        super(props)
        this.refsList = {
            engage: React.createRef(),
            wellpad: React.createRef(),
            crkf: React.createRef(),
            cdot: React.createRef()
        };

        this.handleEnterViewport.bind(this);
        this.handleExitViewport.bind(this);
    }

    handleEnterViewport (watcher) {
        if (location.hash !== watcher.watchItem.id) {
            history.pushState({currentView: watcher.watchItem.id}, '')
            location.hash = watcher.watchItem.id
        }
    }

    handleExitViewport (watcher) {
        if (history.state) {
            switch(watcher.watchItem.id) {
                case 'engage':
                    if (history.state.currentView === 'engage') {
                        history.pushState({currentView: 'landing'}, '', '#landing')
                    }
                    break;
                default:
                    if (history.state.currentView === 'cdot') {
                        history.pushState({currentView: 'contact'}, '', '#contact')
                    }
            }
        }
    }

    render() {
        return (
            <div>
                <Engage
                    fullyEnterViewport={this.handleEnterViewport}
                    exitViewport={this.handleExitViewport} />
                <Wellpad
                    fullyEnterViewport={this.handleEnterViewport} />
                <CRKF
                    fullyEnterViewport={this.handleEnterViewport} />
                <CDOT
                    fullyEnterViewport={this.handleEnterViewport}
                    exitViewport={this.handleExitViewport} />
            </div>
        );
    }
}