import React, { Component } from "react";

import PodiumLogo from "../../assets/podium-logo.svg";
import LrgLogo from "../../assets/access-logo.svg";

export default class Engage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      hasAnimated: false,
    };
  }

  handleBgChange = ({ detail }) => {
    if (detail === 'indianred' && !this.state.hasAnimated) this.setState({ hasAnimated: true });
  };

  componentDidMount() {
    addEventListener('backgroundchange', this.handleBgChange);
  }

  componentWillUnmount() {
    removeEventListener('backgroundchange', this.handleBgChange);
  }

  render() {
    return (
      <div id="engage" className="swiper-slide">
        <div className="slide-content flex flex-column items-center">
          <h1
            className={
              this.state.hasAnimated
                ? "text-center slide-left"
                : "text-center"
            }
          >
            engage
          </h1>
          {this.state.hasAnimated ? (
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
              <p>
                Spending time on two of the loyalty powerhouse's flagship
                products Podium & Access (LRG) has helped hone a vast array of
                full stack web development skills.
                <br />
                <br />
                Catering to enterprise clientele seeking robust, modular, and
                secure platforms requires unwavering attention to detail in all of
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
}
