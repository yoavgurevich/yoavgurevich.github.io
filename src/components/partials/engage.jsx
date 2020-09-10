import React from "react";

import PodiumLogo from "../../assets/podium-logo.svg";
import LrgLogo from "../../assets/access-logo.svg";

const Engage = () => {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const handleBgChange = ({ detail }) => {
    if (detail === 'indianred' && !hasAnimated) setHasAnimated(true);
  };

  React.useEffect(() => {
    addEventListener('backgroundchange', handleBgChange);

    return () => {
      removeEventListener('backgroundchange', handleBgChange);
    };
  }, []);

  return (
    <div id="engage" className="swiper-slide">
      <div className="slide-content flex flex-column items-center">
        <h1
          className={
            hasAnimated
              ? "text-center slide-left"
              : "hidden"
          }
        >
          engage
        </h1>
        {hasAnimated ? (
          <div className="fade-in">
            <div className="text-center">
              <a
                className="img-link"
                href="https://www.engagepeople.com/podium.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={PodiumLogo} alt="Podium Logo"></img>
              </a>
              <a
                className="img-link"
                href="https://www.engagepeople.com/lrg.html"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={LrgLogo} alt="LRG Logo"></img>
              </a>
            </div>
            <p className="md:max-h-1/3-screen">
              Spending time on two of the loyalty powerhouse's flagship
              products Podium & Access (LRG) has helped hone a vast array of
              full stack web development skills.
              <br />
              <br />
              Catering to enterprise clientele seeking robust, modular, and
              secure platforms requires unwavering attention to detail throughout
              the SDLC processes that build on consistent, iterative improvement
              for both developers and end users.
            </p>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
}

export default Engage;
