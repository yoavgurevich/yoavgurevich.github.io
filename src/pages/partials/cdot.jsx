import React from "react";

const CDOT = ({ refsList }) => (
  <div id="cdot" className="swiper-slide" ref={refsList.cdot}>
    <div className="slide-content">
      <svg viewBox="-100 -100 700 350">
        <g>
          <text dy="142" className="svg-xxl eb-garamond" fill="white" dx="-15">CD</text>
          <circle fill="red" r="65" cx="320" cy="80"></circle>
          <circle fill="#400000" stroke="white" r="50" cx="330" cy="75" strokeWidth="7"></circle>
          <circle fill="#EEEEEE" stroke="red" cy="74" strokeWidth="3" r="30" cx="337"></circle>
          <text dy="142" className="svg-xxl eb-garamond" fill="white" dx="385">T</text>
        </g>
      </svg>
      <article className="mt-0">
        <h4 className="mt-0 sm:text-center">Research Assistant</h4>
        <p>
          Under a team led by the esteemed <a
            className="margin-0"
            href="https://blog.humphd.org/"
            rel="noopener noreferrer"
            target="_blank"
          >David Humphrey</a>,
          there's not much more that I can discuss beyond the{" "}
          <a
            className="margin-0"
            href="https://ygcdw.blogspot.ca/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blogger posts
          </a>{" "}
          I created during my time on the project.
        </p>
        <p>
          It was one of the true pleasures of my fledgling career to have worked alongside
          such talent as &nbsp;
          <a
            className="margin-0"
            href="https://www.linkedin.com/in/r-gideon-thomas-26362865"
            rel="noopener noreferrer"
            target="_blank"
          >
            Gideon Thomas
          </a>
          , &nbsp;
          <a
            href="https://www.linkedin.com/in/kieran-sedgwick-88ba0248/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kieran Sedgwick
          </a>
          , and{" "}
          <a
            href="https://www.linkedin.com/in/aldallalali/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ali Al Dallal
          </a>
          . I can say with confidence that I've never really felt like a
          developer until I became a part of this effort.
        </p>
      </article>
    </div>
  </div>
);

export default CDOT;
