import React, { Component } from "react";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faYoutube } from "@fortawesome/free-brands-svg-icons";

// TODO: https://youtu.be/ABdm-uzgZeg
export default class CRKF extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div id="crkf" className="swiper-slide" ref={this.props.refsList.crkf}>
        <div className="slide-content">
          <div className="grid-content">
            <h1 className="aldrich text-center">
              実 道 空 手
              <br />
              Chito-Ryu Karate
            </h1>
            <div className="flex flex-column justify-center">
              <a
                className="a-link"
                href="https://www.youtube.com/watch?v=8YSFOMD2r8Q&list=PL1saFtx4Uu4p2-LGuVFsnM6Ekv-XSVZVA"
                rel="noopener noreferrer"
                target="_blank"
              >
                <FontAwesomeIcon size="4x" icon={faYoutube} />
              </a>
              <article className="sm:max-h-1/3-screen md:max-h-1/6-screen">
                <h4 className="mt-0 sm:text-center">Web Developer</h4>
                <p>
                  <a
                    className="margin-0"
                    href="https://github.com/sedge/opendojo/graphs/contributors"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    OpenDojo
                  </a>{" "}
                  is a now open-source codebase implemented to create a
                  no-nonsense CMS for a local karate club. Its features include
                  upcoming class reminders, a searchable/filterable student list
                  with individual profile views, belt rank and class creation,
                  group email notifications, and a tablet-friendly UI for 2FA
                  student login when attending classes.
                </p>
                <p>
                  Assuming multiple roles in this project, my contributions
                  involved initial server config and route setup using Node and
                  Express.js, implementing a front-to-back authentication module
                  using JSON Web Tokens, maintaining API documentation, and being
                  largely responsible for the front-end style guide and aesthetic.
                </p>
              </article>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
