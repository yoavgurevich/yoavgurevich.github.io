import React, { Component } from "react";

import Landing from "./landing";
import JobList from "./joblist";
import Contact from "./contact";

const INTERSECTION_THRESHOLD = 0.6;

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentBg: "newgray",
      lastComponentId: "",
      jlPage: null,
    };

    this.refsList = {
      landing: React.createRef(),
      joblist: React.createRef(),
      contact: React.createRef(),
    };

    this.resolveBg = this.resolveBg.bind(this);
    this.handleScroll = this.handleScroll.bind(this);
  }

  componentDidMount() {
    const observer = new IntersectionObserver(this.handleScroll, {
      threshold: INTERSECTION_THRESHOLD,
    });
    Object.values(this.refsList).forEach((ref) =>
      observer.observe(ref.current)
    );
  }

  handleScroll(entries) {
    entries.forEach((entry) => {
      console.log('handling scroll');
      if (
        entry.isIntersecting &&
        Math.abs(INTERSECTION_THRESHOLD - entry.intersectionRatio) <= 0.1
      ) {
        this.resolveBg(entry.target.id);
      }
    });
  }

  resolveBg(componentId) {
    if (componentId !== this.state.lastComponentId) {
      let resolvedBackground = "";

      switch (componentId) {
        case "joblist":
          resolvedBackground = "indianred";
          break;
        case "contact":
          resolvedBackground = "newgray-dark";
          break;
        default:
          resolvedBackground = "newgray";
          break;
      }

      this.setState((currentState) =>
        currentState.currentBg !== resolvedBackground
          ? {
              currentBg: resolvedBackground,
              lastComponentId: componentId,
            }
          : null
      );
    }
  }

  render() {
    const baseProps = {
      refsList: this.refsList,
      lastComponentId: this.state.lastComponentId,
      currentBg: this.state.currentBg,
      resolveBg: this.resolveBg,
    };

    return (
      <div id="background" className={this.state.currentBg}>
        {[Landing, JobList, Contact].map((Component, index) => <Component key={`${Date.now()}-${index}`} {...baseProps} />)}
      </div>
    );
  }
}
