import React, { Component } from "react";
import Swiper from "swiper";

import Engage from "./partials/engage";
import Wellpad from "./partials/wellpad";
import CRKF from "./partials/crkf";
import CDOT from "./partials/cdot";

const JobList = props => {
  let swiper = {};

  React.useEffect(() => {
    swiper = new Swiper(".swiper-container", {
      effect: "cube",
      cubeEffect: {
        shadow: false,
      },
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      }
    });

    swiper.on('slideChange', () => {
      if (props.lastComponentId === 'joblist') {
        const bgMapping = ["indianred", "mediumseagreen", "darkslategrey", "maroon"];
        document.getElementById('background').className = bgMapping[swiper.realIndex];
      }
    });
  }, []);

  return (
    <div
      id="joblist"
      className="swiper-container font-cornsilk"
      ref={props.refsList.joblist}
    >
      <div className="swiper-wrapper">
        <Engage
          currentBg={props.currentBg}
          refsList={props.refsList}
        />
        <Wellpad
          refsList={props.refsList}
        />
        <CRKF
          refsList={props.refsList}
        />
        <CDOT
          refsList={props.refsList}
        />
      </div>

      <div className="swiper-pagination" />
    </div>
  );
}

export default JobList;
