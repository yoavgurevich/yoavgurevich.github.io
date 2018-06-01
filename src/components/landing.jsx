import React, { Component } from 'react';
import ScrollButton from './scrollButton';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            loadContent: false
        }

        this.handlePlay = this.handlePlay.bind(this);
    }

    handlePlay(e) {
        setTimeout(() => this.setState({loadContent: true}), 250);
    }

    render() {
        const loadedContent = this.state.loadContent ? (
            <div className='landing-content vertical-align'>
                <h1 className='text-center'>Yoav Gurevich</h1>
                <div className='landing-img animated fadeIn'></div>
                <blockquote>
                    <h5>
                        <p>
                            Seneca College computer programming & analysis graduate of 2015. Studied mixology and wine council studies before that.
                            Dabbled in audio engineering and production before that. Guitar player for nigh on 12 years now, and a big believer
                            in the harmony between opposite schools of knowledge and experience.
                        </p>
                        <p>
                            The project overviews below highlight my humble contributions to a few different use cases. 
                            If there are two things I've learned about the development process so far, it's that
                            it could be as personal and unique as songwriting, and that passion is <i>very</i> contagious.
                        </p>
                    </h5>
                    <ScrollButton direction='down' refsList={this.props.refsList} currentElm='landing' />
                </blockquote>
            </div>
        ) : <div></div>;

        return (
            <div ref={this.props.refsList.landing}>
                <div id='video-viewport'>
                    <video onPlay={this.handlePlay} className="video-bg" autoPlay='true' muted='true'>
                        <source src="/assets/ink4k_edit.mp4" type="video/mp4"/>
                    </video>
                </div>
                {loadedContent}
            </div>
        );
    }
}