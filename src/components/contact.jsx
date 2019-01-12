import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

export default function ContactMe(props) {
    let textBg = <div className='text-bg'><i className='fa fa-comments-o no-glow'></i></div>;

    if (props.currentBg == 'midnightblue'){
        textBg = <div className='text-bg'><i className='fa fa-comments-o text-flicker-in-glow'></i></div>;
    }

    return (
        <div className='contact-bg fsh' ref={props.refsList.contact}>
            <header>
                <h2 onClick={() => scrollToComponent(props.refsList.landing.current)}>
                    <i className='fa fa-2x fa-level-up'></i>
                </h2>
            </header>
            <main className='text-center'>
                {textBg}
                <div className='content'>
                    <h1 className={props.currentBg == 'midnightblue' ? 
                        'league-script padding-15 text-flicker-in-glow' : 
                        'league-script padding-15 no-glow'}>Stay in touch!</h1>
                    <div className='inline-flex'>
                        <a className='no-glow' rel='noopener noreferrer' href='//ca.linkedin.com/in/yoav-gurevich-42415886' target='_blank'>
                            <i className='fa fa-linkedin-square'>&nbsp;</i>
                        </a>
                        <a className='no-glow' rel='noopener noreferrer' href='//twitter.com/ygdot14' target='_blank'>
                            <i className='fa fa-twitter'>&nbsp;</i>
                        </a>
                        <a className='no-glow' rel='noopener noreferrer' href='//github.com/yoavgurevich' target='_blank'>
                            <i className='fa fa-github'>&nbsp;</i>
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