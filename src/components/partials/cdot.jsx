import React from "react";

const CDOT = ({ refsList }) => (
  <div id="cdot" className="swiper-slide" ref={refsList.cdot}>
    <div className="slide-content">
      <svg>
        <g>
          <text
            dx="162"
            dy="142"
            className="svg-xxl eb-garamond"
            fill="white"
          >
            CD
          </text>
          <circle cx="320" cy="115" r="35" fill="red" />
          <circle
            cx="327"
            cy="114"
            r="27"
            fill="#400000"
            stroke="white"
            strokeWidth="3"
          />
          <circle
            cx="330"
            cy="113"
            r="15"
            fill="#EEEEEE"
            stroke="red"
            strokeWidth="2"
          />
          <text
            dx="359"
            dy="142"
            className="svg-xxl eb-garamond"
            fill="white"
          >
            T
          </text>
        </g>
      </svg>
      <p>
        Under such an inspiring team led by the esteemed <a
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
        <br /><br />
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
        developer until I became a part of this project.
      </p>
    </div>
  </div>
);

export default CDOT;
