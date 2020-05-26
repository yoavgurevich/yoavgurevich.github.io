import React from "react";
import ScrollButton from "../scrollButton";

const CDOT = ({ refsList }) => (
  <div id="cdot" className="swiper-slide" ref={refsList.cdot}>
    <div className="fsh grid-container">
      <div className="grid-header">
        <ScrollButton direction="up" refsList={refsList} />
      </div>
      <div className="grid-content">
        <svg width="100%" height="100%" className="slide-left">
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
        <p className="fade-in">
          Under a rigorously inspiring team lead by the esteemed David Humphrey,
          there's not much more that I can discuss on top of my{" "}
          <a
            className="margin-0"
            href="https://ygcdw.blogspot.ca/"
            rel="noopener noreferrer"
            target="_blank"
          >
            Blogger posts
          </a>{" "}
          during my time on the project besides reiterating that it was one of
          the true pleasures of my fledgling career to have worked alongside
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
            href="https://twitter.com/theSedgeHammer"
            rel="noopener noreferrer"
            target="_blank"
          >
            Kieran Sedgwick
          </a>
          , and{" "}
          <a
            href="https://twitter.com/alicoding"
            rel="noopener noreferrer"
            target="_blank"
          >
            Ali Al Dallal
          </a>
          . I must say with confidence that I've never really felt like a
          programmer until I experienced being a part of this project.
        </p>
      </div>
      <div className="grid-footer">
        <ScrollButton direction="down" refsList={refsList} />
      </div>
    </div>
  </div>
);

export default CDOT;
