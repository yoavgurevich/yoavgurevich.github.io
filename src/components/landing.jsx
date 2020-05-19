import React, { Component } from 'react';
import ScrollButton from './scrollButton';

import yg1 from '../assets/yg1.png';
import yg2 from '../assets/yg2.png';
import yg3 from '../assets/yg3.png';
import yg4 from '../assets/yg4.png';
import yg5 from '../assets/yg5.png';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            picsCarousel: [
                { source: yg1, ref: React.createRef() },
                { source: yg2, ref: React.createRef() },
                { source: yg3, ref: React.createRef() },
                { source: yg4, ref: React.createRef() },
                { source: yg5, ref: React.createRef() },
            ],
        }
    }

    componentDidMount() {
        addEventListener('load', this.cyclePics());
    }

    componentWillUnmount() {
        removeEventListener('load', this.cyclePics);
    }

    cyclePics(index = 0) {
        if (index === this.state.picsCarousel.length) return;

        setTimeout(() => {
            this.state.picsCarousel[index].ref.current.className = 'image-active';
            this.cyclePics(index + 1);
        }, 900);
    }

    render() {
        return (
            <div id="landing" className='fsh intro-bg' ref={this.props.refsList.landing}>
                <svg id='skyline'>
                    <image xlinkHref='https://openclipart.org/download/307354/1538176045.svg' />
                    <rect></rect>
                </svg>
                <div className='landing-content vertical-align'>
                    <div className='landing-img'>
                        {this.state.picsCarousel.map(({ ref, source }, index) => <img key={Date.now() + index} ref={ref} src={source} />)}
                    </div>
                    <blockquote className='puff-in-center'>
                        <h5>
                            <p>
                                2015 Seneca College CPAC alumni. BSO mixology and wine council of Ontario certifications before that.
                                Audio engineering and production dabbler before that. Guitar player for nigh on 15 years. In short, a big believer
                                in the harmony between opposite schools of knowledge and experience.
                            </p>
                            <p>
                                The project overviews below highlight my humble contributions to a few different use cases. 
                                If there are two things I've learned about the development process so far, it's that
                                it could be as personal and unique as songwriting, and that passion is <i>very</i> contagious.
                            </p>
                        </h5>
                    </blockquote>
                    <ScrollButton direction='down' refsList={this.props.refsList} currentElm='landing'  resolveBg={this.props.resolveBg} />
                </div>
            </div>
        );
    }
}