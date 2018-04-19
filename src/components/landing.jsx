import React from 'react';

export default function Landing() {
    return (
        <div id='video-viewport'>
            <video className="video-bg" autoPlay='true' poster="">
                <source src="./assets/circuits.mp4" type="video/mp4"/>
            </video>
            {/* <h1 className='text-center'>This is landing</h1> */}
        </div>
    );
}