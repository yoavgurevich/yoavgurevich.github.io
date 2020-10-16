import React from "react";
import PaiGrowthLogo from "../../assets/pai-growth-logo.svg";

const Paytm = () => {
  const [hasAnimated, setHasAnimated] = React.useState(false);

  const handleBgChange = ({ detail }) => {
    if (detail === "customblue" && !hasAnimated) setHasAnimated(true);
  };

  React.useEffect(() => {
    addEventListener("backgroundchange", handleBgChange);

    return () => {
      removeEventListener("backgroundchange", handleBgChange);
    };
  }, []);

  return (
    <div id="paytm" className="swiper-slide">
      <div className="slide-content flex flex-column items-center">
        <h1
          className={
            hasAnimated ? "text-center work-sans typewriter" : "hidden"
          }
        >
          <a className="stateless-link-white" href="https://paytm.ca" rel="noopener noreferrer" target="_blank">
            Paytm Labs
          </a>
        </h1>
        {hasAnimated ? (
          <div className="fade-in">
            <div className="text-center">
              <a
                className="img-link"
                href="https://cloud.paytm.com/solutions/growth/"
                rel="noopener noreferrer"
                target="_blank"
              >
                <img src={PaiGrowthLogo} alt="PAI Growth Logo" />
              </a>
            </div>
            <article className="sm:max-h-1/2-screen md:max-h-1/3-screen">
              <h4 className="mt-0 sm:text-center">Web Developer</h4>
              <p>
                Programming next to some of the brightest minds in the payment provider space,
                I seized the opportunity to gain secure frontend coding skills with{" "}
                <a
                  className="margin-0"
                  href="https://github.com/sedge/opendojo/graphs/contributors"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  PCI DSS principles
                </a>
                , contribute to their web developer hiring processes, and continue
                strengthening my React and Vue.js experience.
              </p>
              <p>
                Whether it was javascript SDKs, marketing campaign forms, or
                simply elegant invoice layouts, everything was written with a diligent
                effort to adhere to better practices in every part of the
                lifecycle - more unit and end-to-end testing coverage, clean and
                performant code with an eye towards refactoring conovluted and
                legacy portions, better Gitflow, and more documentation.
              </p>
            </article>
          </div>
        ) : (
          <div></div>
        )}
      </div>
    </div>
  );
};

export default Paytm;
