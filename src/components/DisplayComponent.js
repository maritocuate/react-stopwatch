import React from 'react';

function DisplayComponent(props) {

    const {h, m, s, ms} = props.time

    return (
      <div className="container d-flex display-2">
        <div className='num'>{ (h<10) ? `0${h}` : h }:</div>
        <div className='num'>{ (m<10) ? `0${m}` : m }:</div>
        <div className='num'>{ (s<10) ? `0${s}` : s }:</div>
        <div className='num'>{ (ms<10) ? `0${ms}` : ms }</div>
      </div>
    );
  }

export default DisplayComponent