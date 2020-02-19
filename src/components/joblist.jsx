import React, { Component } from 'react';
import FlipPage from 'react-flip-page';

import Engage from './partials/engage';
import Wellpad from './partials/wellpad';
import CRKF from './partials/crkf';
import CDOT from './partials/cdot';

export default class JobList extends Component {
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
        return (
            <div id="joblist" className='container' ref={this.props.refsList.joblist}>
                <FlipPage
                    orientation='horizontal'
                    className='flipContainer'
                    flipOnTouch
                    onPageChange={(idx) => this.handlePageChange(idx)}
                    pageBackground='transparent'
                    perspective='40em'
                    responsive>
                    <Engage
                        currentBg={this.props.currentBg}
                        currentPage={this.state.currentPage}
                        refsList={this.props.refsList} />
                    <Wellpad
                        currentPage={this.state.currentPage}
                        refsList={this.props.refsList} />
                    <CRKF
                        currentPage={this.state.currentPage}
                        refsList={this.props.refsList} />
                    <CDOT
                        currentPage={this.state.currentPage}
                        refsList={this.props.refsList} />
                </FlipPage>
            </div>
        );
    }
}