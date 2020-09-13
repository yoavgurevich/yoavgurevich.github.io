import React from "react";
import Swiper from "react-id-swiper";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDoubleLeft,
  faAngleDoubleRight,
} from "@fortawesome/free-solid-svg-icons";

import ScrollButton from "./scrollButton";
import Paytm from "./partials/paytm";
import Engage from "./partials/engage";
import Wellpad from "./partials/wellpad";
import CRKF from "./partials/crkf";
import CDOT from "./partials/cdot";

const JobList = (props) => {
  const [swiper, setSwiper] = React.useState(null);
  const [hasInteracted, setHasInteracted] = React.useState(false);

  const swiperParams = {
    effect: "cube",
    cubeEffect: {
      shadow: false,
      slideShadows: false,
    },
    grabCursor: true,
    resistanceRatio: 0.01,
    navigation: {
      nextEl: ".swiper-button-next.nested",
      prevEl: ".swiper-button-prev.nested",
    },
    renderNextButton: () => (
      <FontAwesomeIcon
        className={`swiper-button-next nested fa-nav-btn${!hasInteracted ? ' pulsate' : ''}`}
        size="6x"
        icon={faAngleDoubleRight}
      />
    ),
    renderPrevButton: () => (
      <FontAwesomeIcon
        className="swiper-button-prev nested fa-nav-btn"
        size="6x"
        icon={faAngleDoubleLeft}
      />
    ),
  };

  React.useEffect(() => {
    if (swiper !== null) {
      swiper.on("slideChange", () => {
        props.resolveBg("joblist", swiper.realIndex);
        setHasInteracted(true);
      });
    }
  }, [swiper]);

  return (
    <div
      id="joblist"
      className="fsh font-cornsilk"
      ref={props.refsList.joblist}
    >
      <ScrollButton direction="up" refsList={props.refsList} />
      <Swiper {...swiperParams} getSwiper={setSwiper}>
        <Paytm refsList={props.refsList} />
        <Engage refsList={props.refsList} />
        <Wellpad refsList={props.refsList} />
        <CRKF refsList={props.refsList} />
        <CDOT refsList={props.refsList} />
      </Swiper>
      <ScrollButton direction="down" refsList={props.refsList} />
    </div>
  );
};

export default JobList;
