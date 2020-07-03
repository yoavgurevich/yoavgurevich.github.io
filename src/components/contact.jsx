import React from "react";
import ScrollButton from './scrollButton';
import ReactImage from "../assets/react.png";
import SassImage from "../assets/sass.png";
import WebpackImage from "../assets/webpack.png";

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
          onClick={() =>
            refsList.landing.current.scrollIntoView({
              behavior: "smooth",
              block: "start",
            })
          }
        >
          <i className="fa fa-2x fa-level-up"></i>
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
              <i className="no-glow fa fa-linkedin-square">&nbsp;</i>
            </a>
            <a
              rel="noopener noreferrer"
              href="//twitter.com/ygdot14"
              target="_blank"
            >
              <i className="no-glow fa fa-twitter">&nbsp;</i>
            </a>
            <a
              rel="noopener noreferrer"
              href="//github.com/yoavgurevich"
              target="_blank"
            >
              <i className="no-glow fa fa-github"></i>
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
            <img src={ReactImage} alt="React.js" />
          </a>
          <a href="//webpack.js.org" rel="noopener noreferrer" target="_blank">
            <img src={WebpackImage} alt="Webpack" />
          </a>
          <a href="//sass-lang.com" rel="noopener noreferrer" target="_blank">
            <img src={SassImage} alt="Sass" />
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
