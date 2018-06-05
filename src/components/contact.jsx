import React from 'react';
import scrollToComponent from 'react-scroll-to-component';

export default function ContactMe(props) {
    return (
        <div className='contact-bg fsh' ref={props.refsList.contact}>
            <main>
                <article className='left'>
                    <h2>Stay in touch...</h2>
                    <ul>
                        <li>
                            <h2>
                                <a href='//ca.linkedin.com/in/yoav-gurevich-42415886' target='_blank'>
                                    <i className='fa fa-linkedin-square'>&nbsp;</i>
                                </a>
                                <a href='//twitter.com/ygdot14' target='_blank'>
                                    <i className='fa fa-twitter'>&nbsp;</i>
                                </a>
                                <a href='//github.com/yoavgurevich' target='_blank'>
                                    <i className='fa fa-github'>&nbsp;</i>
                                </a>
                            </h2>
                        </li>
                    </ul>
                    <br />
                    <h4 className='margin-bottom-5'>This portfolio was made possible thanks to these great projects:</h4>
                    <a href='//reactjs.org/' target='_blank'><img src='/assets/react.png' alt='React.js' /></a>
                    <a href='//webpack.js.org' target='_blank'><img src='/assets/webpack.png' alt='Webpack' /></a>
                    <a href='//sass-lang.com' target='_blank'><img src='/assets/sass.png' alt='Sass' /></a>
                    <a href='//idangero.us/swiper/' target='_blank'><img src='/assets/swiper.png' alt='Swiper' /></a>
                </article>
                <article className='right'>
                    <h1 className='text-center' onClick={() => scrollToComponent(props.refsList.landing.current)}>
                        <i className='fa fa-2x fa-level-up'></i>
                    </h1>
                </article>
            </main>
            <footer>
                <small>Landing page clip courtesy of <a href='//mitchmartinez.com/' target='_blank'>Mitch Martinez</a><sup>&trade;</sup>. Stock footage license agreement available upon request.</small>
            </footer>
        </div>
    );
}