import React from "react";

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
    <div onClick={handleClick} className="slide-link-container">
      <h2>
        <i className={"fa fa-2x fa-angle-double-" + direction}></i>
      </h2>
    </div>
  );
};

export default ScrollButton;
