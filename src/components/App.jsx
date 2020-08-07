import React, { Component } from "react";

import Landing from "./landing";
import JobList from "./joblist";
import Contact from "./contact";

const INTERSECTION_THRESHOLD = 0.6;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.refsList = {
      landing: React.createRef(),
      joblist: React.createRef(),
      contact: React.createRef(),
    };

    this.lastJoblistIndex = 0;
    this.lastComponentId = 'landing';
  }

  componentDidMount() {
    const observer = new IntersectionObserver(this.handleScroll, {
      threshold: INTERSECTION_THRESHOLD,
    });
    Object.values(this.refsList).forEach((ref) =>
      observer.observe(ref.current)
    );
  }

  handleScroll = (entries) => {
    entries.forEach((entry) => {
      if (
        entry.isIntersecting &&
        Math.abs(INTERSECTION_THRESHOLD - entry.intersectionRatio) <= 0.1
      ) {
        this.resolveBg(entry.target.id);
      }
    });
  }

  resolveBg = (componentId, joblistIndex) => {
    if (componentId !== this.lastComponentId || joblistIndex !== this.lastJoblistIndex) {
      let resolvedBackground = "";

      switch (componentId) {
        case "joblist":
          const joblistBackgrounds = [
            "indianred",
            "mediumseagreen",
            "darkslategrey",
            "maroon",
          ];
          if (![null, undefined, NaN].includes(joblistIndex))
            this.lastJoblistIndex = joblistIndex;
          resolvedBackground = joblistBackgrounds[this.lastJoblistIndex];
          break;
        case "contact":
          resolvedBackground = "newgray-dark";
          break;
        default:
          resolvedBackground = "newgray";
          break;
      }

      document.getElementById("background").className = resolvedBackground;
      this.lastComponentId = componentId;
      dispatchEvent(new CustomEvent('backgroundchange', { detail: resolvedBackground }));
    }
  }

  render() {
    const baseProps = {
      refsList: this.refsList,
      resolveBg: this.resolveBg,
    };

    return (
      <div id="background" className="newgray">
        {[Landing, JobList, Contact].map((Component, index) => (
          <Component key={`${Date.now()}-${index}`} {...baseProps} />
        ))}
      </div>
    );
  }
}
