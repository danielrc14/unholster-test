import React from 'react';

const calculatorInput = props => {
    return (
        <div style={{'margin': '15px', 'border': '1px solid black', 'padding': '15px', 'width': '50px'}}>
            <input style={{'width': '45px'}} type='text' value={props.value} onChange={props.changeHandler}/>
        </div>
    )
};

export default calculatorInput;