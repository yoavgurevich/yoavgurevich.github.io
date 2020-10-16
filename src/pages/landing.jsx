import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCode, faGuitar, faUserGraduate } from "@fortawesome/free-solid-svg-icons";
import ScrollButton from "../components/ScrollButton/ScrollButton";
import CountUpNumber from "../components/CountUpNumber/CountUpNumber";

import yg1 from "../assets/yg1.png";
import yg2 from "../assets/yg2.png";
import yg3 from "../assets/yg3.png";
import yg4 from "../assets/yg4.png";
import yg5 from "../assets/yg5.png";

import "../stylesheets/landing.scss";

const Landing = ({ refsList }) => {
  const picsCarousel = [
    { source: yg1, ref: React.useRef() },
    { source: yg2, ref: React.useRef() },
    { source: yg3, ref: React.useRef() },
    { source: yg4, ref: React.useRef() },
    { source: yg5, ref: React.useRef() },
  ];
  const currentYear = new Date().getFullYear();

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
    <div role="banner" id="landing" className="fsh intro-bg" ref={refsList.landing}>
      <svg xmlns="http://www.w3.org/2000/svg" id="skyline">
        <image xlinkHref="https://openclipart.org/download/307354/1538176045.svg" />
      </svg>
      <div className="landing-content flex flex-column justify-between items-center overflow-visible">
        <div className="landing-img">
          {loaded ? (
            <img src={yg5} alt="profile avatar 5" className="image-active" />
          ) : (
            picsCarousel.map(({ ref, source }, index) => (
              <img key={Date.now() + index} alt={`profile avatar ${index + 1}`} ref={ref} src={source} />
            ))
          )}
        </div>
        <div className="sm:w-9/10 w-1/2 flex justify-space-between mt-6 mb-3">
          <div className="w-1/3 text-center fade-up">
            <h3 className="margin-0"><p className="margin-0"><FontAwesomeIcon icon={faUserGraduate} /></p><CountUpNumber>2015</CountUpNumber></h3>
            <span>Seneca CPAC Alumnus</span>
          </div>
          <div className="w-1/3 text-center fade-up-250">
            <h3 className="margin-0"><p className="margin-0"><FontAwesomeIcon icon={faCode} /></p><CountUpNumber duration={500}>{currentYear - 2015}</CountUpNumber>+</h3>
            <span>Years of Industry Experience</span>
          </div>
          <div className="w-1/3 text-center fade-up-500">
            <h3 className="margin-0"><p className="margin-0"><FontAwesomeIcon icon={faGuitar} /></p><CountUpNumber duration={1000}>{currentYear - 2003}</CountUpNumber>+</h3>
            <span>Years of Axe Noodling</span>
          </div>
        </div>
        <blockquote className="xl:w-1/3 w-1/2 sm:w-9/10 puff-in-center margin-0">
          <p>
            BSO Mixology & Wine Council of Ontario certified. Audio engineering and
            production dabbler. In short, a big believer in inspiration from all
            schools of knowledge and experience.
          </p>
          <p>
            My name is Yoav Gurevich, and the project overviews below highlight my 
            career contributions to various teams and products.
          </p>
        </blockquote>
      </div>
      <ScrollButton direction="down" refsList={refsList} currentElm="landing" />
    </div>
  );
};

export default Landing;
