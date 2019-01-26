import React, { Component } from "react";
import scrollToComponent from 'react-scroll-to-component';

export default class ContactMe extends Component {
    constructor(props) {
        super(props);

        this.linkRefs = {
            twitter: React.createRef(),
            linkedin: React.createRef(),
            github: React.createRef()
        }

        this.intervalIds = [];
        this.toggleColorGlow = this.toggleColorGlow.bind(this);
    }

    componentDidMount() {
        Object.keys(this.linkRefs).forEach(ref => {
            let intervalId;

            switch(ref) {
                case 'twitter':
                    intervalId = setInterval(() => this.toggleColorGlow('twitter'), 1500);
                    break;
                case 'linkedin':
                    intervalId = setInterval(() => this.toggleColorGlow('linkedin'), 2000);
                    break;
                default:
                    intervalId = setInterval(() => this.toggleColorGlow('github'), 1000);
                    break;
            }

            this.intervalIds.push(intervalId);
        });
    }

    componentWillUnmount() {
        this.intervalIds.forEach(intervalId => clearInterval(intervalId));
    }

    toggleColorGlow(elmKey) {
        let currentElm = this.linkRefs[elmKey].current;

        if (currentElm.className.indexOf('active-glow') === -1) {
            currentElm.className += ' active-glow';
        } else {
            currentElm.className = currentElm.className.substring(0, currentElm.className.indexOf(' active-glow'));
        }
    }

    render() {
        let textBg = <div className='text-bg'><i className='fa fa-comments-o no-glow'></i></div>;
    
        if (this.props.currentBg == 'midnightblue'){
            textBg = <div className='text-bg'><i className='fa fa-comments-o text-flicker-in-glow'></i></div>;
        }
    
        return (
            <div className='contact-bg fsh' ref={this.props.refsList.contact}>
                <header>
                    <h2 onClick={() => scrollToComponent(this.props.refsList.landing.current)}>
                        <i className='fa fa-2x fa-level-up'></i>
                    </h2>
                </header>
                <main className='text-center'>
                    {textBg}
                    <div className='content'>
                        <h1 className={this.props.currentBg == 'midnightblue' ? 
                            'league-script padding-15 text-flicker-in-glow' : 
                            'league-script padding-15 no-glow'}>Stay in touch!</h1>
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
                    <h5 className='margin-bottom-5'>This portfolio was made possible thanks to these great projects:</h5>
                    <section className='vendor-imgs'>
                        <a href='//reactjs.org/' target='_blank'><img src='/assets/react.png' alt='React.js' /></a>
                        <a href='//webpack.js.org' target='_blank'><img src='/assets/webpack.png' alt='Webpack' /></a>
                        <a href='//sass-lang.com' target='_blank'><img src='/assets/sass.png' alt='Sass' /></a>
                    </section>
                </footer>
            </div>
        );
    }
}