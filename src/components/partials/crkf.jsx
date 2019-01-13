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
                    <div className='fade-in flex-center'>
                        <a className='a-link' href='https://www.youtube.com/watch?v=8YSFOMD2r8Q&list=PL1saFtx4Uu4p2-LGuVFsnM6Ekv-XSVZVA' rel='noopener noreferrer' target='_blank'><i className='fa fa-4x fa-youtube-square'></i></a>
                        <p>
                            <a className='margin-0' href='https://github.com/sedge/opendojo/graphs/contributors' target='_blank' rel='noopener noreferrer'>OpenDojo</a> is a now open-source codebase that was implemented 
                            to create a content management system for a local karate club.
                            Its features include real-time upcoming class reminders, a searchable/filterable student list with
                            individual profile views, belt rank and class creation, group email notifications,
                            and a tablet-friendly interface for two-step logging-in for students attending classes.
                            <br /><br />
                            Assuming multiple roles in this project, my contributions involved initial server config and route setup using Node
                            and Express.js, implementing a front-to-back authentication module using JSON Web Tokens,
                            maintaining API documentation, and being largely responsible for the front-end style guide and aesthetic.
                        </p>
                    </div>
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