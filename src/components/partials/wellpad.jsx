import React, { Component } from 'react';
import ScrollButton from '../scrollButton';
 
export default class Wellpad extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        let resolvedContent = this.props.currentPage == 1 ? (
            <div className='fsh grid-container wellpad-bg'>
                <div className="grid-header">
                    <ScrollButton direction='up' refsList={this.props.refsList} />
                </div>
                <div className="grid-content margin-bottom-40">
                    <h1 className='rouge-script h0 text-center slide-left'>Wellpad.io</h1>
                    <div className='fade-in'>
                        <div className='img-group'>
                            <img src='https://i.imgur.com/CIsoSBG.png' alt='wellpad image 1'></img>
                            <img src='https://i.imgur.com/H9bpbJm.png' alt='wellpad image 2'></img>
                            <img src='https://i.imgur.com/59BmDKw.png' alt='wellpad image 3'></img>
                        </div>
                        <p>
                            This iPad-centric solution was commissioned in order to ameliorate an older system used for managing a health clinic's
                            patient and staff data. It provides an intuitive survey platform, as well as an administrative interface for viewing current information and trends
                            in both new and returning patients.
                            <br /><br />
                            My primary role for this project was front-end view and component implementation for the patient-intake and follow-up surveys.
                            Design mock-ups were issued our savvy team lead <a href="https://www.linkedin.com/in/leesaynor/" rel="noopener noreferrer" target='_blank'>Lee Saynor</a>.
                            Lead Developer <a href="https://twitter.com/tabakd_" rel="noopener noreferrer" target='_blank'>Daniel Tabak</a> maintained a unique and frenetic pace throughout every milestone.
                        </p>
                        <div className='img-group'>
                            <img src='https://i.imgur.com/OAye111.png' alt='wellpad image 4'></img>
                            <img src='https://i.imgur.com/9uZQe3K.png' alt='wellpad image 5'></img>
                            <img src='https://i.imgur.com/osl2TbD.png' alt='wellpad image 6'></img>
                        </div>
                    </div>
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