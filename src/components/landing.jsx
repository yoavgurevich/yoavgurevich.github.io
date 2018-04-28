import React from 'react';

export default function Landing(props) {
    return (
        <div id='video-viewport'>
            <video className="video-bg" autoPlay='true' poster="">
                <source src="./assets/circuits.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}