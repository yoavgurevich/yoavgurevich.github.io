import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
 
export default Watch(class CRKF extends Component {
    constructor(props) {
        super(props)
    }
 
    render () {
        return (
            <section 
                id='crkf' 
                className='fsh vertical-align'>
                <h1>Chito-Ryu Karate & Fitness</h1>
            </section>
        );
    }
})