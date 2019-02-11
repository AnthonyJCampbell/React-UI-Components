import React from 'react';
import './Button.css';

const ActionButton = (props) => {
    return (
        <div className="actionButton fullWidth">
            {props.content}
        </div>
    );
}

export default ActionButton;
