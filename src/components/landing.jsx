import React, { Component } from 'react';
import ScrollButton from './scrollButton';
import scrollToComponent from 'react-scroll-to-component';

export default class Landing extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div ref={this.props.refsList.landing}>
                <div id='video-viewport'>
                    <video className="video-bg" autoPlay='true'>
                        <source src="/assets/circuits.mp4" type="video/mp4"/>
                    </video>
                </div>
                <div className='landing-content vertical-align'>
                    <h1 className='text-center'>Yoav Gurevich</h1>
                    <div className='landing-img'></div>
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
                    </blockquote>
                    <ScrollButton direction='down' refsList={this.props.refsList} currentElm='landing' />
                </div>
            </div>
        );
    }
}