import React from 'react';

function ButtonsComponent(props){
    return(
        <div className='btn-group data-toggle="buttons"'>
            <button type='button' className='btn btn-outline-light btn-lg' onClick={props.start}>Start</button>
            <button type='button' className='btn btn-outline-light btn-lg'>Stop</button>
        </div>
    )
}

export default ButtonsComponent