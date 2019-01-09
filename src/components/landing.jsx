import React, { Component } from 'react';
import ScrollButton from './scrollButton';

export default class Landing extends Component {
    constructor(props) {
        super(props);

        this.state = {
            currentPic: 'yg1',
            svgClass: '',
            currentIterator: 1
        }

        this.cyclePics = this.cyclePics.bind(this);
    }

    componentDidMount() {
        this.cyclePics();
    }

    cyclePics() {
        if (this.state.currentPic !== 'yg5') {
            setTimeout(() => {
                this.setState((prevState) => {
                    return {
                        currentPic: `yg${prevState.currentIterator}`,
                        currentIterator: prevState.currentIterator + 1,
                        svgClass: 'focused'
                    }
                });

                this.cyclePics();
            }, 1200);
        }
    }

    render() {
        return (
            <div className='fsh intro-bg' ref={this.props.refsList.landing}>
                <svg className={this.state.svgClass}>
                    <image xlinkHref='https://openclipart.org/download/307354/1538176045.svg' />
                    <rect></rect>
                </svg>
                <div className='landing-content vertical-align'>
                    <h1 className='text-center'>&nbsp;</h1>
                    <div className={'landing-img slide-in-bck-center ' + this.state.currentPic}></div>
                    <blockquote>
                        <h5>
                            <p>
                                Seneca College CPAC alumni of 2015. BSO mixology and wine council of Ontario certifications before that.
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