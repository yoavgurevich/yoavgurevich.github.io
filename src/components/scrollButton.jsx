import React from 'react';

export default function ScrollButton(props) {
    return (
        <div onClick={props.handleOnClick} className='slide-link-container'>
            <h2>
                <i className={'fa fa-2x fa-angle-double-' + props.direction}></i>
            </h2>
        </div>
    );
}