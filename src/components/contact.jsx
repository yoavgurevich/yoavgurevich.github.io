import React from 'react';

export default function ContactMe() {
    return (
        <div className='contact-img fsh'>
            <div className='blur-content'>
                <h2>Stay in touch...</h2>
                <ul>
                    <li><h2><i className='fa fa-twitter'></i></h2></li>
                    <li><h2><i className='fa fa-envelope'></i></h2></li>
                    <li><h2><i className='fa fa-github'></i></h2></li>
                </ul>
                <h4>This portfolio was made possible thanks to these great projects:</h4>
            </div>
            <div className='blur-container'></div>
        </div>
    );
}