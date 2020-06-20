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

  componentDidUpdate() {
    if (this.props.currentBg == "indianred" && !this.state.hasAnimated) {
      this.setState({ hasAnimated: true });
    }
  }

  render() {
    return (
      <div id="engage" className="swiper-slide">
        <div className="slide-content">
          <h1
            className={
              this.props.currentBg == "indianred" || this.state.hasAnimated
                ? "text-center slide-left"
                : "text-center"
            }
          >
            engage
          </h1>
          {this.props.currentBg == "indianred" || this.state.hasAnimated ? (
            <div className="fade-in">
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
              <p>
                Spending time on two of the loyalty powerhouse's flagship
                products Podium & Access (LRG) has helped hone a vast array of
                full stack web development skills.
                <br />
                <br />
                Catering to enterprise clientele seeking robust, modular, and
                secure platforms requires consistent attention to detail and
                processes that build on iterative improvement.
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
