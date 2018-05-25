import React, { Component } from 'react';
import ReactDOM from 'react-dom';

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