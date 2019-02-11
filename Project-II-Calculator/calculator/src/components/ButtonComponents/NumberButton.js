import React from 'react';
import './Button.css';

const NumberButton = (props) => {
    return (
        <div className="numberButton">
            {props.num}
        </div>
    );
}

export default NumberButton;
