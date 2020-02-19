import React, { Component } from 'react';
import CSSTransitionGroup from 'react-transition-group/CSSTransitionGroup';
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
            currentPic: '',
            picsCarousel: [yg1, yg2, yg3, yg4, yg5],
            svgClass: '',
            currentIterator: 1
        }

        this.cyclePics = this.cyclePics.bind(this);
    }

    componentDidMount() {
        addEventListener('load', () => {
            this.setState({
                currentPic: this.state.picsCarousel[0],
                svgClass: 'focused'
            });

            this.cyclePics();
        });
    }

    componentWillUnmount() {
        removeEventListener('load', this.cyclePics);
    }

    cyclePics() {
        if (this.state.currentIterator !== 5) {
            setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        currentPic: prevState.picsCarousel[prevState.currentIterator],
                        currentIterator: prevState.currentIterator + 1
                    }
                });

                this.cyclePics();
            }, 1100);
        }
    }

    render() {
        let landingImages = []
        for (let i = 0; i < 5; i++) {
            const imageStyleConditionals = { 
                opacity: this.state.currentIterator - 1 !== i ? '0' : '1'
            }
            landingImages.push(<img style={imageStyleConditionals} src={this.state.picsCarousel[i]} key={i} />)
        }

        return (
            <div id="landing" className='fsh intro-bg' ref={this.props.refsList.landing}>
                <svg id='skyline' className={this.state.svgClass}>
                    <image xlinkHref='https://openclipart.org/download/307354/1538176045.svg' />
                    <rect></rect>
                </svg>
                <div className='landing-content vertical-align'>
                    <h1 className='text-center'>&nbsp;</h1>
                    <div className='landing-img'>
                        {landingImages}
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