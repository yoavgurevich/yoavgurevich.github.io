import React, { Component } from "react";
import Swiper from "swiper";

import Engage from "./partials/engage";
import Wellpad from "./partials/wellpad";
import CRKF from "./partials/crkf";
import CDOT from "./partials/cdot";

const JobList = props => {
  const [currentPage, setCurrentPage] = React.useState(0);

  React.useEffect(() => {
    new Swiper(".swiper-container", {
      effect: "cube",
      loop: true,
      grabCursor: true,
      pagination: {
        el: ".swiper-pagination",
        dynamicBullets: true,
      },
      on: {
        slideNextTransitionStart: () => {
          setCurrentPage(currentPage + 1);
        },
        slidePrevTransitionStart: () => {
          setCurrentPage(currentPage - 1);
        },
      }
    });
  }, []);

  return (
    <div
      id="joblist"
      className="swiper-container font-cornsilk"
      style={{ position: "relative" }}
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
