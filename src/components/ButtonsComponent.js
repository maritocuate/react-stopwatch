import React from 'react';

function ButtonsComponent(props){
    return(
        <div className='btn-group data-toggle="buttons"'>
            {
                (props.status===0)?
                    <button type='button' className='btn btn-outline-light btn-lg' onClick={props.start}>Start</button>
                : null
            }
            {
                (props.status===1)?
                    <button type='button' className='btn btn-outline-light btn-lg' onClick={props.stop}>Stop</button>
                : null
            }
            {
                (props.status===2)?[
                    <button type='button' className='btn btn-outline-light btn-lg' onClick={props.resume}>Resume</button>,
                    <button type='button' className='btn btn-outline-light btn-lg' onClick={props.reset}>Reset</button>
                ]: null
            }
        </div>
    )
}

export default ButtonsComponent