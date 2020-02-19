import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';
import ReactImage from '../assets/react.png';
import SassImage from '../assets/sass.png';
import WebpackImage from '../assets/webpack.png';

export default class ContactMe extends Component {
    constructor(props) {
        super(props);

        this.linkRefs = {
            twitter: React.createRef(),
            linkedin: React.createRef(),
            github: React.createRef()
        }

        this.intervalIds = [];
        this.timeoutIds = [];
        this.createGlowTimers = this.createGlowTimers.bind(this);
        this.toggleColorGlow = this.toggleColorGlow.bind(this);
        this.clearGlowTimers = this.clearGlowTimers.bind(this);
    }

    createGlowTimers() {
        const timeoutId = setTimeout(() => {
            Object.keys(this.linkRefs).forEach(ref => {
                let intervalId, timeoutId;
    
                switch(ref) {
                    case 'linkedin':
                        intervalId = setInterval(() => this.toggleColorGlow('linkedin'), 1000);
                        this.intervalIds.push(intervalId);
                        break;
                    case 'twitter':
                        timeoutId = setTimeout(() => {
                            const intervalId = setInterval(() => this.toggleColorGlow('twitter'), 1000);
                            this.intervalIds.push(intervalId);
                        }, 500);
                        this.timeoutIds.push(timeoutId);
                        break;
                    default:
                        timeoutId = setTimeout(() => {
                            const intervalId = setInterval(() => this.toggleColorGlow('github'), 1000);
                            this.intervalIds.push(intervalId);
                        }, 1000);
                        this.timeoutIds.push(timeoutId);
                        break;
                }
            });
        }, 3000);

        this.timeoutIds.push(timeoutId);
    }

    toggleColorGlow(elmKey, resetGlowState = false) {
        let currentElm = this.linkRefs[elmKey].current;

        if (resetGlowState) {
            if (currentElm && currentElm.className.indexOf('active-glow') !== -1)
                currentElm.className = currentElm.className.substring(0, currentElm.className.indexOf(' active-glow'));

            return;
        } else if (currentElm.className.indexOf('active-glow') === -1) {
            currentElm.className += ' active-glow';
        } else {
            // There are no mistakes, just happy accidents...
            let resolvedTimeout;

            switch(elmKey) {
                case 'linkedin':
                    resolvedTimeout = 1000;
                    break;
                case 'twitter':
                    resolvedTimeout = 500;
                    break;
                default:
                    resolvedTimeout = 0;
                    break;
            }

            const timeoutId = setTimeout(() => {
                currentElm.className = currentElm.className.substring(0, currentElm.className.indexOf(' active-glow'));
            }, resolvedTimeout);

            this.timeoutIds.push(timeoutId);
        }
    }

    clearGlowTimers() {
        this.intervalIds.forEach(intervalId => clearInterval(intervalId));
        this.timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));
    }

    componentWillUnmount() {
        this.clearGlowTimers();
    }

    render() {
        if (this.props.currentBg == 'midnightblue'){
            this.createGlowTimers();
        } else {
            Object.keys(this.linkRefs).forEach(ref => this.toggleColorGlow(ref, true));
            this.clearGlowTimers();
        }
    
        return (
            <div id="contact" className='contact-bg fsh' ref={this.props.refsList.contact}>
                <header>
                    <h2 onClick={() => scrollToComponent(this.props.refsList.landing.current)}>
                        <i className='fa fa-2x fa-level-up'></i>
                    </h2>
                </header>
                <main className='text-center'>
                    <div className={this.props.currentBg == 'midnightblue' ? 'content' : 'content no-glow-border'}>
                        <h1 className={this.props.currentBg == 'midnightblue' ? 
                            'league-script text-flicker-in-glow' : 
                            'league-script no-glow'}>Stay in touch!</h1>
                        <div className='inline-flex'>
                            <a rel='noopener noreferrer' href='//ca.linkedin.com/in/yoav-gurevich-42415886' target='_blank'>
                                <i ref={this.linkRefs.linkedin} className='no-glow fa fa-linkedin-square'>&nbsp;</i>
                            </a>
                            <a rel='noopener noreferrer' href='//twitter.com/ygdot14' target='_blank'>
                                <i ref={this.linkRefs.twitter} className='no-glow fa fa-twitter'>&nbsp;</i>
                            </a>
                            <a rel='noopener noreferrer' href='//github.com/yoavgurevich' target='_blank'>
                                <i ref={this.linkRefs.github} className='no-glow fa fa-github'>&nbsp;</i>
                            </a>
                        </div>
                    </div>
                </main>
                <footer>
                    <h5>This portfolio was made possible thanks to these great projects:</h5>
                    <section className='vendor-imgs'>
                        <a href='//reactjs.org/' target='_blank'><img src={ReactImage} alt='React.js' /></a>
                        <a href='//webpack.js.org' target='_blank'><img src={WebpackImage} alt='Webpack' /></a>
                        <a href='//sass-lang.com' target='_blank'><img src={SassImage} alt='Sass' /></a>
                    </section>
                </footer>
            </div>
        );
    }
}