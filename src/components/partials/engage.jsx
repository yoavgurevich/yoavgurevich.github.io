import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Engage extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        let resolvedContent = this.props.currentPage == 0 ? (
            <div className='fsh grid-container'>
                <div className="grid-header">
                    <ScrollButton direction='up' refsList={this.props.refsList} />
                </div>
                <div className="grid-content">
                    <h1 className='text-center slide-left'>engage</h1>
                    <div className='fade-in'>
                        <img src='https://www.engagepeople.com/img/Podium_logo.svg' alt='Podium Logo'></img>
                        <img src='https://www.engagepeople.com/img/LRG_logo.svg' alt='LRG Logo'></img>
                        <p>
                            Spending time on two of the loyalty powerhouse's flagship products Podium & LRG (Axs)
                            has helped hone a vast array of full stack web development skills. 
                            <br /><br />
                            Catering to enterprise clientele
                            seeking robust, modular, and secure platforms requires consistent attention to detail and processes 
                            that build on iterative improvement.
                        </p>
                    </div>
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