import React, { Component } from "react";
import Swiper from "react-id-swiper";

const Wellpad = ({ refsList }) => {
  const swiperParams = {
    slidesPerView: 'auto',
    effect: 'coverflow',
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
  };

  const wellpadImages = [
    "https://i.imgur.com/CIsoSBG.png",
    "https://i.imgur.com/H9bpbJm.png",
    "https://i.imgur.com/59BmDKw.png",
    "https://i.imgur.com/OAye111.png",
    "https://i.imgur.com/9uZQe3K.png",
    "https://i.imgur.com/osl2TbD.png",
  ];

  const getSlideStyle = (imageSource) => ({
    backgroundImage: `url(${imageSource})`,
    backgroundSize: 'contain',
    backgroundRepeat: 'no-repeat',
    backgroundPositionX: '50%',
  });

  return (
    <div id="wellpad" className="swiper-slide" ref={refsList.wellpad}>
      <div className="slide-content">
        <div className="grid-content margin-bottom-40">
          <h1 className="rouge-script h0 text-center slide-left">Wellpad.io</h1>
          <div className="fade-in">
            <div className="img-group horizontal-center">
              <Swiper {...swiperParams}>
                {wellpadImages.map((imageSource, idx) => (
                  <div
                    key={idx + Date.now()}
                    style={getSlideStyle(imageSource)}
                  />
                ))}
              </Swiper>
            </div>
            <p>
              This iPad-centric solution was commissioned in order to ameliorate
              an older system used for managing a health clinic's patient and
              staff data. It provides an intuitive survey platform, as well as
              an administrative interface for viewing current information and
              trends in both new and returning patients.
              <br />
              <br />
              My primary role for this project was front-end view and component
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Wellpad;
