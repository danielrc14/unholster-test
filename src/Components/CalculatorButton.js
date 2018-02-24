import React from 'react';

const calculatorButton = props => {
    return (
        <div style={{'margin': '15px', 'border': '1px solid black', 'padding': '15px', 'width': '50px'}}>
            <button onClick={props.clickHandler}>{props.buttonLabel}</button>
            <p>{props.value}</p>
        </div>
    )
};

export default calculatorButton;