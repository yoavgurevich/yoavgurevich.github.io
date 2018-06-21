import React, { Component } from 'react';
import { Watch } from 'scrollmonitor-react';
import ScrollButton from '../scrollButton';
 
export default Watch(class Engage extends Component {
    constructor(props) {
        super(props);

        this.state = {
            flipClass: ''
        }

        this.toggleClass = this.toggleClass.bind(this);
    }

    toggleClass() {
        this.setState((prevState, props) => {
            return {
                flipClass: prevState.flipClass.length ? '' : ' flip'
            }
        });
    }
 
    render () {
        return (
            <section 
                id='engage'
                className='fsh vertical-align flip-container'
                ref={this.props.refsList.engage}>
                <ScrollButton direction='up' refsList={this.props.refsList} currentElm='engage' />
                <div className={'flipper text-center' + this.state.flipClass}>
                    <article className='front inline-grid'>
                        <h1>engage</h1>
                        <i className='fa fa-2x fa-rotate-left' onClick={this.toggleClass}></i>
                    </article>
                    <article className='back grid-container'>
                        <i className='fa fa-2x fa-rotate-right' onClick={this.toggleClass}></i>
                        <h5>Lorem Ipsum Dolores fuck</h5>
                    </article>
                </div>
                <ScrollButton direction='down' refsList={this.props.refsList} currentElm='engage' />
            </section>
        );
    }
})