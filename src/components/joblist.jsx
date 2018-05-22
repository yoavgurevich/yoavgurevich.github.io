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
            </div>
        );
    }
}