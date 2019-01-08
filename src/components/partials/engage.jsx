import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Engage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            hasAnimated: false
        }
    }

    componentDidUpdate() {
        if (this.props.currentBg == 'indianred' && !this.state.hasAnimated) {
            this.setState({ hasAnimated: true });
        }
    }
 
    render () {
        let resolvedContent = this.props.currentPage == 0 ? (
            <div className='fsh grid-container'>
                <div className="grid-header">
                    <ScrollButton direction='up' refsList={this.props.refsList} />
                </div>
                <div className={this.props.currentBg == 'indianred' || this.state.hasAnimated ? 'grid-content' : 'grid-content col-1'}>
                    <h1 className={this.props.currentBg == 'indianred' || this.state.hasAnimated ? 'text-center slide-left' : 'text-center'}>engage</h1>
                    {this.props.currentBg == 'indianred' || this.state.hasAnimated ? (
                        <div className='fade-in'>
                            <a className='img-link' href='https://www.engagepeople.com/podium.html' rel='noopener noreferrer' target='_blank'><img src='https://www.engagepeople.com/img/Podium_logo.svg' alt='Podium Logo'></img></a>
                            <a className='img-link' href='https://www.engagepeople.com/lrg.html' rel='noopener noreferrer' target='_blank'><img src='https://www.engagepeople.com/img/LRG_logo.svg' alt='LRG Logo'></img></a>
                            <p>
                                Spending time on two of the loyalty powerhouse's flagship products Podium & LRG (Axs)
                                has helped hone a vast array of full stack web development skills. 
                                <br /><br />
                                Catering to enterprise clientele
                                seeking robust, modular, and secure platforms requires consistent attention to detail and processes 
                                that build on iterative improvement.
                            </p>
                        </div>
                    ) : <div></div>}
                </div>
                <div className="grid-footer">
                    <ScrollButton direction='down' refsList={this.props.refsList} />
                </div>
            </div>
        ) : <div></div>;

        return (
            <article
                id='engage'>
                {resolvedContent}
            </article>
        );
    }
}