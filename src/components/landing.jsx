import React from "react";
import ScrollButton from "./scrollButton";

import yg1 from "../assets/yg1.png";
import yg2 from "../assets/yg2.png";
import yg3 from "../assets/yg3.png";
import yg4 from "../assets/yg4.png";
import yg5 from "../assets/yg5.png";

const Landing = ({ refsList }) => {
  const picsCarousel = [
    { source: yg1, ref: React.useRef() },
    { source: yg2, ref: React.useRef() },
    { source: yg3, ref: React.useRef() },
    { source: yg4, ref: React.useRef() },
    { source: yg5, ref: React.useRef() },
  ];

  const [loaded, setLoaded] = React.useState(false);

  React.useEffect(() => {
    cyclePics();
  }, []);

  const cyclePics = (index = 0) => {
    if (index === picsCarousel.length + 1) return setLoaded(true);

    setTimeout(() => {
      const currentIndexRef = picsCarousel[index]?.ref?.current;
      if (currentIndexRef) currentIndexRef.className = "image-active";
      cyclePics(index + 1);
    }, 900);
  };

  return (
    <div id="landing" className="fsh intro-bg" ref={refsList.landing}>
      <svg id="skyline">
        <image xlinkHref="https://openclipart.org/download/307354/1538176045.svg" />
      </svg>
      <div className="landing-content flex flex-column justify-between items-center overflow-visible">
        <div className="landing-img">
          {loaded ? (
            <img src={yg5} className="image-active" />
          ) : (
            picsCarousel.map(({ ref, source }, index) => (
              <img key={Date.now() + index} ref={ref} src={source} />
            ))
          )}
        </div>
        <blockquote className="puff-in-center">
          <h5>
            <p>
              2015 Seneca College CPAC alumni. BSO mixology and wine council of
              Ontario certifications before that. Audio engineering and
              production dabbler before that. Guitar player for nigh on 15
              years. In short, a big believer in the harmony between opposite
              schools of knowledge and experience.
            </p>
            <p>
              The project overviews below highlight my humble contributions to a
              few different use cases. If there are two things I've learned
              about the development process so far, it's that it could be as
              personal and unique as songwriting, and that passion is{" "}
              <i>very</i> contagious.
            </p>
          </h5>
        </blockquote>
        <ScrollButton direction="down" refsList={refsList} currentElm="landing" />
      </div>
    </div>
  );
};

export default Landing;
