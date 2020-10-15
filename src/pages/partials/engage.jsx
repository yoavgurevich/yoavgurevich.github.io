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
            <div className="flex justify-center">
              <div className="w-1/2 text-right">
                <a
                  className="img-link filter-brightness-3/5"
                  href="https://www.engagepeople.com/podium.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={PodiumLogo} alt="Podium Logo"></img>
                </a>
              </div>
              <div className="w-1/2">
                <a
                  className="img-link filter-brightness-3/5"
                  href="https://www.engagepeople.com/lrg.html"
                  rel="noopener noreferrer"
                  target="_blank"
                >
                  <img src={LrgLogo} alt="LRG Logo"></img>
                </a>
              </div>
            </div>
            <p className="sm:max-h-1/2-screen md:max-h-1/3-screen">
              <h4 className="mt-0 sm:text-center">Full-Stack Developer</h4>
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
