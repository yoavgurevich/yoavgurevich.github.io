import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import scrollToComponent from 'react-scroll-to-component';

import Engage from './partials/engage';
import Wellpad from './partials/wellpad';
import CRKF from './partials/crkf';
import CDOT from './partials/cdot';

export default class JobList extends Component {
    constructor(props) {
        super(props);
        this.refsList = {
            engage: React.createRef(),
            wellpad: React.createRef(),
            crkf: React.createRef(),
            cdot: React.createRef()
        };

        this.resolveHash.bind(this);
        this.handleEnterViewport.bind(this);
    }

    handleEnterViewport (watcher) {
        if (location.hash !== '#' + watcher.watchItem.id) {
            location.hash = watcher.watchItem.id
            console.log(location.hash)
        }
    }

    render() {
        return (
            <div>
                <Engage
                    fullyEnterViewport={this.handleEnterViewport} />
                <Wellpad
                    fullyEnterViewport={this.handleEnterViewport} />
                <CRKF
                    fullyEnterViewport={this.handleEnterViewport} />
                <CDOT
                    fullyEnterViewport={this.handleEnterViewport} />
            </div>
        );
    }
}