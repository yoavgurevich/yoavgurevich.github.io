import React, { Component } from "react";
import ReactImage from '../assets/react.png';
import SassImage from '../assets/sass.png';
import WebpackImage from '../assets/webpack.png';

export default class ContactMe extends Component {
    constructor(props) {
        super(props);

        this.state = {
            links: {
                linkedin: {
                    cssClass: 'no-glow fa fa-linkedin-square',
                },
                twitter: {
                    cssClass: 'no-glow fa fa-twitter'
                },
                github: {
                    cssClass: 'no-glow fa fa-github'
                }
            }
        }

        this.timeoutIds = [];
    }

    createGlowTimers() {
        const initialTimeoutId = setTimeout(() => {
            Object.keys(this.state.links).forEach(linkName => {
                const timeoutDelays = {
                    linkedin: 0,
                    twitter: 500,
                    github: 1000
                };

                const timeoutId = setTimeout(() => this.toggleColorGlow(linkName), timeoutDelays[linkName]);
                this.timeoutIds.push(timeoutId);
            });
        }, 3000);

        this.timeoutIds.push(initialTimeoutId);
    }

    toggleColorGlow(linkName) {
        const { cssClass } = this.state.links[linkName];

        if (cssClass.indexOf('active-glow') === -1) {
            this.setState(prevState => ({
                links: {
                    ...prevState.links,
                    [linkName]: {
                        cssClass: prevState.links[linkName].cssClass + ' active-glow'
                    }
                }
            }));
        } else {
            const refTimeouts = {
                linkedin: 900,
                twitter: 500,
                github: 0
            };

            const timeoutId = setTimeout(() => {
                this.setState(prevState => ({
                    links: {
                        ...prevState.links,
                        [linkName]: {
                            cssClass: prevState.links[linkName].cssClass.substring(0, cssClass.indexOf(' active-glow'))
                        }
                    }
                }));
            }, refTimeouts[linkName]);

            this.timeoutIds.push(timeoutId);
        }

        const timeoutId = setTimeout(() => this.toggleColorGlow(linkName), 1000);
        this.timeoutIds.push(timeoutId);
    };

    clearGlowCssAndTimers() {
        this.timeoutIds.forEach(timeoutId => clearTimeout(timeoutId));

        Object.keys(this.state.links).forEach(linkName => {
            if (this.state.links[linkName].cssClass.indexOf('active-glow') !== -1)
                this.setState(prevState => ({
                    links: {
                        ...prevState.links,
                        [linkName]: {
                            cssClass: prevState.links[linkName].cssClass.substring(0, prevState.links[linkName].cssClass.indexOf(' active-glow'))
                        }
                    }
                }));
        });

        this.timeoutIds = [];
    }

    componentDidMount() {
        if (this.props.currentBg === 'black' && !this.timeoutIds.length) this.createGlowTimers();
    }

    componentDidUpdate() {
        if (this.props.currentBg === 'black' && !this.timeoutIds.length) this.createGlowTimers();
        if (this.timeoutIds.length >= 500 || this.props.currentBg !== 'black') this.clearGlowCssAndTimers();
    }

    componentWillUnmount() {
        this.clearGlowCssAndTimers();
    }

    render() {
        return (
            <div id="contact" className='container contact-bg fsh font-cornsilk' ref={this.props.refsList.contact}>
                <header>
                    <h2 onClick={() => this.props.refsList.landing.current.scrollIntoView({ behavior: 'smooth', block: 'start' })}>
                        <i className='fa fa-2x fa-level-up'></i>
                    </h2>
                </header>
                <main className='text-center'>
                    <div className={this.props.currentBg == 'black' ? 'content' : 'content no-glow-border'}>
                        <h1 className={this.props.currentBg == 'black' ? 
                            'league-script text-flicker-in-glow' : 
                            'league-script no-glow'}>Stay in touch!</h1>
                        <div className='inline-flex'>
                            <a rel='noopener noreferrer' href='//ca.linkedin.com/in/yoav-gurevich-42415886' target='_blank'>
                                <i className={this.state.links.linkedin.cssClass}>&nbsp;</i>
                            </a>
                            <a rel='noopener noreferrer' href='//twitter.com/ygdot14' target='_blank'>
                                <i className={this.state.links.twitter.cssClass}>&nbsp;</i>
                            </a>
                            <a rel='noopener noreferrer' href='//github.com/yoavgurevich' target='_blank'>
                                <i className={this.state.links.github.cssClass}></i>
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