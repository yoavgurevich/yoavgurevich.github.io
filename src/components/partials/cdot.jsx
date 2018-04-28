import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
 
export default Watch(class CDOT extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <section 
                id='cdot'
                className='fsh vertical-align'>
                <h1>CDOT</h1>
            </section>
        );
    }
})