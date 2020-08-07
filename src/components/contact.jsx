import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faLevelUpAlt } from '@fortawesome/free-solid-svg-icons';
import { faLinkedin, faTwitter, faGithub, faReact, faSass, faFontAwesomeFlag } from '@fortawesome/free-brands-svg-icons';
import ScrollButton from './scrollButton';

const Contact = ({ refsList }) => {
  return (
    <div
      id="contact"
      className="container contact-bg fsh font-cornsilk"
      ref={refsList.contact}
    >
      <header className="flex justify-between">
        <div className="horizontal-center">
          <ScrollButton direction="up" refsList={refsList} currentElm="contact" />
        </div>
        <h2
          className="home-btn"
          onClick={() =>
            refsList.landing.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <FontAwesomeIcon size="2x" icon={faLevelUpAlt} />
        </h2>
      </header>
      <main className="text-center">
        <div>
          <h1 className="league-script no-glow">Stay in touch!</h1>
          <div className="inline-flex">
            <a
              rel="noopener noreferrer"
              href="//ca.linkedin.com/in/yoav-gurevich-42415886"
              target="_blank"
            >
              <FontAwesomeIcon className="no-glow" size="4x" icon={faLinkedin} />
            </a>
            <a
              rel="noopener noreferrer"
              href="//twitter.com/ygdot14"
              target="_blank"
            >
              <FontAwesomeIcon className="no-glow" size="4x" icon={faTwitter} />
            </a>
            <a
              rel="noopener noreferrer"
              href="//github.com/yoavgurevich"
              target="_blank"
            >
              <FontAwesomeIcon className="no-glow" size="4x" icon={faGithub} />
            </a>
          </div>
        </div>
      </main>
      <footer>
        <div>
          <h5>
            This portfolio was made possible thanks to these great projects:
          </h5>
        </div>
        <div className="vendor-imgs">
          <a href="//reactjs.org/" rel="noopener noreferrer" target="_blank">          
            <FontAwesomeIcon size="2x" icon={faReact} />
          </a>
          <a href="//sass-lang.com" rel="noopener noreferrer" target="_blank">
            <FontAwesomeIcon size="2x" icon={faSass} />
          </a>
          <a href="//fontawesome.com" rel="noopener noreferrer" target="_blank">
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
