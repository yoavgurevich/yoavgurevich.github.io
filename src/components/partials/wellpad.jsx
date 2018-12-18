import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Wellpad extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        let resolvedContent = this.props.currentPage == 1 ? (
            <div className='fsh grid-container'>
                <div className="grid-header">
                    <ScrollButton direction='up' refsList={this.props.refsList} />
                </div>
                <div className="grid-content">
                    <h1 className='rouge-script h0 text-center'>Wellpad.io</h1>
                    <p>
                        This iPad-centric solution was commissioned in order to ameliorate an older system used for managing a health clinic's
                        patient and staff data. It provides an intuitive survey platform, as well as an administrative interface for viewing current information and trends
                        in both new and returning patients.
                        <br /><br />
                        My primary role for this project was front-end view and component implementation for the patient-intake and follow-up surveys.
                        Design mock-ups were issued out by team lead <a href="https://twitter.com/lee_saynor" target='_blank'>Lee Saynor</a>, and I was to try and bring them to life and make them usable the best of my ability.
                        Lead Developer <a href="https://twitter.com/tabakd_" target='_blank'>Daniel Tabak</a> maintained a unique and frenetic pace throughout every milestone.
                    </p>
                </div>
                <div className="grid-footer">
                    <ScrollButton direction='down' refsList={this.props.refsList} />
                </div>
            </div>
        ) : <div></div>;

        return (
            <article 
                id='wellpad'
                ref={this.props.refsList.wellpad}>
                {resolvedContent}
            </article>
        );
    }
}