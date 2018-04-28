import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
 
export default Watch(class Wellpad extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <section 
                id='wellpad'
                className='fsh vertical-align'>
                <h1>Wellpad.io</h1>
            </section>
        );
    }
})