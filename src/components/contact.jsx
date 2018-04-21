import React from 'react';
import ScrollableAnchor,{ goToTop } from 'react-scrollable-anchor';

export default function ContactMe() {
    return (
        <ScrollableAnchor id={'contact'}>
            <div className='contact-img fsh vertical-align' onClick={() => goToTop()}>
            </div>
        </ScrollableAnchor>
    );
}