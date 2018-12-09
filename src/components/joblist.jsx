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
        this.state = {
            currentPage: 0
        }

        this.handlePageChange.bind(this);
    }

    handlePageChange(idx) {
        this.setState({currentPage: idx});
        if (this.props.resolveBg) {
            this.props.resolveBg('joblist', idx);
        }
    }

    render() {
        if (this.props.isFullyInViewport && this.props.resolveBg) {
            this.props.resolveBg('joblist', this.state.currentPage);
        }

        return (
            <div className='container' ref={this.props.refsList.joblist}>
                <FlipPage
                    orientation='horizontal'
                    className='flipContainer'
                    flipOnTouch
                    onPageChange={(idx) => this.handlePageChange(idx)}
                    pageBackground={this.props.currentBg}   
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