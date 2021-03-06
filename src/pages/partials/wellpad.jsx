import React, { Component } from "react";
import Swiper from "react-id-swiper";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faAngleLeft, faAngleRight } from "@fortawesome/free-solid-svg-icons";

import "../../stylesheets/partials/wellpad.scss";

import wellpad1 from "../../assets/wellpad1.png";
import wellpad2 from "../../assets/wellpad2.png";
import wellpad3 from "../../assets/wellpad3.png";
import wellpad4 from "../../assets/wellpad4.png";
import wellpad5 from "../../assets/wellpad5.png";
import wellpad6 from "../../assets/wellpad6.png";

const Wellpad = ({ refsList }) => {
  const [innerSwiper, setInnerSwiper] = React.useState(null);

  const swiperParams = {
    slidesPerView: 1,
    centeredSlides: true,
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    renderNextButton: () => <FontAwesomeIcon className="swiper-button-next fa-nav-btn img-group-nav-right" size="6x" icon={faAngleRight} />,
    renderPrevButton: () => <FontAwesomeIcon className="swiper-button-prev fa-nav-btn img-group-nav-left" size="6x" icon={faAngleLeft} />,
    zoom: true,
  };

  const wellpadImages = [
    wellpad1,
    wellpad2,
    wellpad3,
    wellpad4,
    wellpad5,
    wellpad6,
  ];

  const toggleImageZoom = () => {
    if (innerSwiper !== null) innerSwiper.zoom.toggle();
  };

  return (
    <div id="wellpad" className="swiper-slide" ref={refsList.wellpad}>
      <div className="slide-content">
        <div className="grid-content margin-bottom-40">
          <h1 className="rouge-script h0 text-center">Wellpad.io</h1>
          <section>
            <div className="img-group">
              <Swiper {...swiperParams} getSwiper={setInnerSwiper}>
                {wellpadImages.map((imageSource, idx) => (
                  <div key={`wellpadImges-${idx}`}>
                    <div
                      className="swiper-zoom-container"
                      key={idx + Date.now()}
                    >
                      <img onClick={toggleImageZoom} src={imageSource} alt={`wellpad-image-${idx + 1}`} />
                    </div>
                  </div>
                ))}
              </Swiper>
            </div>
            <article className="md:max-h-1/3-screen">
              <h4 className="mt-0 sm:text-center">Front-End Developer</h4>
              <p>
                This iPad-centric solution was commissioned in order to ameliorate
                an older system used for managing a health clinic's patient and
                staff data. It provides an intuitive survey platform, as well as
                an administrative interface for viewing current information and
                trends in both new and returning patients.
              </p>
              <p>
                My primary role in this project was React view and component
                implementation for the patient-intake and follow-up surveys.
                Design mock-ups were issued our savvy team lead{" "}
                <a
                  href="https://www.linkedin.com/in/leesaynor/"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Lee Saynor
                </a>
                . Lead Developer{" "}
                <a
                  href="https://twitter.com/tabakd_"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  Daniel Tabak
                </a>{" "}
                maintained a unique and frenetic pace throughout every milestone.
              </p>
            </article>
          </section>
        </div>
      </div>
    </div>
  );
};

export default Wellpad;
