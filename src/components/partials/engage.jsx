import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
 
export default Watch(class Engage extends Component {
    constructor(props) {
        super(props);
    }
 
    render () {
        return (
            <section 
                id='engage'
                className='fsh vertical-align'>
                <h1>engage</h1>
            </section>
        );
    }
})