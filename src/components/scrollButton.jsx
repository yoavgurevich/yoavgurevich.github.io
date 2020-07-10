import React from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faAngleDoubleUp, faAngleDoubleDown } from '@fortawesome/free-solid-svg-icons'

const ScrollButton = ({ direction, refsList, currentElm = "joblist" }) => {
  const handleClick = () => {
    if (refsList) {
      const refKeys = Object.keys(refsList);
      const resolvedRefIndex =
        direction === "up"
          ? refKeys.indexOf(currentElm) - 1
          : refKeys.indexOf(currentElm) + 1;

      refsList[refKeys[resolvedRefIndex]].current.scrollIntoView({
        behavior: "smooth",
        block: direction === "up" ? "start" : "end",
      });
    }
  };

  return (
    <div onClick={handleClick} className="slide-link-container text-center">
      <h2>
        <FontAwesomeIcon size="2x" icon={direction === "up" ? faAngleDoubleUp : faAngleDoubleDown} />
      </h2>
    </div>
  );
};

export default ScrollButton;
