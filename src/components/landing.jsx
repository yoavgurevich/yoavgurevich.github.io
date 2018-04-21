import React from 'react';
import { goToAnchor } from 'react-scrollable-anchor'

export default function Landing() {
    return (
        <div id='video-viewport' onClick={() => goToAnchor('engage-people')}>
            <video className="video-bg" autoPlay='true' poster="">
                <source src="./assets/circuits.mp4" type="video/mp4"/>
            </video>
        </div>
    );
}