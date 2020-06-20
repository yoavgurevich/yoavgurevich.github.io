import React, { Component } from "react";
import Swiper from 'react-id-swiper';

import ScrollButton from './scrollButton';
import Engage from "./partials/engage";
import Wellpad from "./partials/wellpad";
import CRKF from "./partials/crkf";
import CDOT from "./partials/cdot";

const JobList = props => {
  const [swiper, setSwiper] = React.useState(null);
  const swiperParams = {
    effect: "cube",
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
    loop: true,
    grabCursor: true,
    pagination: {
      el: ".swiper-pagination",
      dynamicBullets: true,
    }
  };

  React.useEffect(() => {
    if (swiper !== null) {
      swiper.on('slideChange', () => {
        props.resolveBg('joblist', swiper.realIndex);
      });
    }
  }, [swiper]);

  return (
    <div
      id="joblist"
      className="font-cornsilk"
      ref={props.refsList.joblist}
    >
      <ScrollButton direction="up" refsList={props.refsList} />
      <Swiper {...swiperParams} getSwiper={setSwiper}>
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
      </Swiper>
      <ScrollButton direction="down" refsList={props.refsList} />
    </div>
  );
}

export default JobList;
