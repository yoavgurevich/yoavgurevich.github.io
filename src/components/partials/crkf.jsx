import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class CRKF extends Component {
    constructor(props) {
        super(props)
    }
 
    render () {
        let resolvedContent = this.props.currentPage == 2 ? (
            <div className='fsh grid-container'>
                <div className="grid-header">
                    <ScrollButton direction='up' refsList={this.props.refsList} />
                </div>
                <div className="grid-content">
                    <h1 className='aldrich text-center slide-left'>
                        実 道 空 手
                        <br />
                        Chito-Ryu Karate
                    </h1>
                    <p className='fade-in'>
                        <a className='margin-0' href='https://github.com/sedge/opendojo/graphs/contributors' target='_blank' rel='noopener noreferrer'>OpenDojo</a> is a now open-sourced codebase that was implemented to create a content management system for a local karate club.
                        Its features include a real-time reminder of the upcoming classes, a searchable/filterable student list with detailed
                        individual profile views, belt rank and class creation views, a club-wide e-mail/announcement module,
                        and a tablet-friendly interface for two-step logging-in for students attending classes.
                        <br /><br />
                        Taking on multiple roles in this project, my contributions involved initial server and server routes setup with Node
                        and Express.js, implementing a rudimentary front-to-back authentication module using JSON Web Tokens,
                        maintaining thorough API and data flow documentation for the repository,
                        as well as being largely responsible for the style guide and appearance of the front-end view elements.
                    </p>
                </div>
                <div className="grid-footer">
                    <ScrollButton direction='down' refsList={this.props.refsList} />
                </div>
            </div>
        ) : <div></div>;

        return (
            <article 
                id='crkf' 
                ref={this.props.refsList.crkf}>
                {resolvedContent}
            </article>
        );
    }
}