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
    }

    render() {
        if (this.props.isFullyInViewport) {
            this.props.resolveBg('joblist');
        }

        return (
            <div className='container' ref={this.props.refsList.joblist}>
                <FlipPage
                    orientation='horizontal'
                    className='flipContainer'
                    showSwipeHint
                    pageBackground={this.props.currentBg}   
                    perspective='40em'
                    responsive>
                    <Engage
                        refsList={this.props.refsList}
                        resolveBg={this.props.resolveBg} />
                    <Wellpad
                        refsList={this.props.refsList}
                        resolveBg={this.props.resolveBg} />
                    <CRKF
                        refsList={this.props.refsList}
                        resolveBg={this.props.resolveBg} />
                    <CDOT
                        refsList={this.props.refsList}
                        resolveBg={this.props.resolveBg} />
                </FlipPage>
            </div>
        );
    }
})