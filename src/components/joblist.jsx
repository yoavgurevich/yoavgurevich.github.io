import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import FlipPage from 'react-flip-page';
import { Watch } from 'scrollmonitor-react';

import Engage from './partials/engage';
import Wellpad from './partials/wellpad';
import CRKF from './partials/crkf';
import CDOT from './partials/cdot';

export default Watch(class JobList extends Component {
    constructor(props) {
        super(props);

        this.state = {currentBg: 'indianred'};

        this.resolveBg.bind(this);
    }

    resolveBg(i, d) {
        const backgrounds = ['indianred', 'mediumseagreen', 'darkslategrey', 'black'];
        let resolvedBg = '';
        if (!i && d == 'prev') {
            resolvedBg = 'indianred';
        } else {
            resolvedBg = d == 'next' ? backgrounds[i+1] : backgrounds[i];
        }

        this.setState(() => {currentBg: resolvedBg});
    }

    handleEnterViewport (watcher) {
        // if (location.hash !== watcher.watchItem.id) {
        //     location.hash = watcher.watchItem.id
        // }
    }

    handleExitViewport (watcher) {
        // switch(watcher.watchItem.id) {
        //     case 'engage':
        //         if (document.body.scrollTop === 0 && location.hash.indexOf('engage') !== -1) {
        //             location.hash = 'landing';
        //         }
        //         break;
        //     case 'cdot':
        //         if ((innerHeight + scrollY) >= document.body.offsetHeight && location.hash.indexOf('cdot') !== -1) {
        //             location.hash = 'contact';
        //         }
        //         break;
        // }
    }

    render() {
        return (
            <div className='container'>
                <FlipPage
                    ref={this.props.refsList.joblist}
                    orientation='horizontal'
                    flipOnTouch
                    pageBackground={this.state.currentBg}
                    perspective='40em'
                    responsive>
                    <Engage
                        refsList={this.props.refsList} />
                    <Wellpad
                        refsList={this.props.refsList} />
                    <CRKF
                        refsList={this.props.refsList} />
                    <CDOT
                        refsList={this.props.refsList} />
                </FlipPage>
            </div>
        );
    }
})