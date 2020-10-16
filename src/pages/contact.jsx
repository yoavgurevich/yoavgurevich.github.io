import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import {
	faLinkedin,
	faTwitter,
	faGithub,
	faReact,
	faSass,
	faFontAwesomeFlag
} from '@fortawesome/free-brands-svg-icons';
import ScrollButton from '../components/ScrollButton/ScrollButton';
import '../stylesheets/contact.scss';

const Contact = ({ refsList }) => {
	return (
		<div id="contact" className="container contact-bg fsh font-cornsilk" ref={refsList.contact}>
			<header className="flex justify-center">
				<div className="w-1/3" />
				<div className="w-1/3">
					<ScrollButton direction="up" refsList={refsList} currentElm="contact" />
				</div>
				<div className="w-1/3 text-right">
					<h2
            aria-label="Scroll to Top Button"
						className="home-btn"
						onClick={() =>
							refsList.landing.current.scrollIntoView({
								behavior: 'smooth',
								block: 'start'
							})}
					>
						<FontAwesomeIcon size="2x" icon={faLevelUpAlt} />
					</h2>
				</div>
			</header>
			<main className="text-center">
				<div>
					<h1 className="font-weight-light">Let's connect...</h1>
					<div className="inline-flex">
						<a rel="noopener noreferrer" aria-label="Click here to view my LinkedIn profile" href="//ca.linkedin.com/in/yoav-gurevich-42415886" target="_blank">
							<FontAwesomeIcon size="4x" icon={faLinkedin} />
						</a>
						<a rel="noopener noreferrer" aria-label="Click here to view my Twitter page" href="//twitter.com/ygdot14" target="_blank">
							<FontAwesomeIcon size="4x" icon={faTwitter} />
						</a>
						<a rel="noopener noreferrer" aria-label="Click here to view my GitHub profile" href="//github.com/yoavgurevich" target="_blank">
							<FontAwesomeIcon size="4x" icon={faGithub} />
						</a>
					</div>
				</div>
			</main>
			<footer role="contentinfo">
				<div>
					<h5>This portfolio was made possible thanks to these great projects:</h5>
				</div>
				<div className="vendor-imgs">
					<a
						href="//reactjs.org/"
						aria-label="Click here to open the React.js site"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon size="2x" icon={faReact} />
					</a>
					<a
						href="//sass-lang.com"
						aria-label="Click here to open the SASS site"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon size="2x" icon={faSass} />
					</a>
					<a
						href="//fontawesome.com"
						aria-label="Click here to open the FontAwesome site"
						rel="noopener noreferrer"
						target="_blank"
					>
						<FontAwesomeIcon size="2x" icon={faFontAwesomeFlag} />
					</a>
				</div>
			</footer>
			<svg id="skyline-inverse">
				<image xlinkHref="https://openclipart.org/download/307354/1538176045.svg" />
			</svg>
		</div>
	);
};

export default Contact;
