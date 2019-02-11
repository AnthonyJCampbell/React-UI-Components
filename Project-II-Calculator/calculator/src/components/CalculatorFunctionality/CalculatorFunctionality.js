import React from 'react';
import './CalculatorFunctionality.css'
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorFunctionality = () => {
    return (
        <div className="functionalityHolder">
            {/* leftHand will have display: flex, reverse row */}
            <div className="leftHand">
                <NumberButton buttonStyle="numberButton fullWidth" text="clear" />
                <NumberButton buttonStyle="numberButton" text="7" />
                <NumberButton buttonStyle="numberButton" text="8" />
                <NumberButton buttonStyle="numberButton" text="9" />
                <NumberButton buttonStyle="numberButton" text="4" />
                <NumberButton buttonStyle="numberButton" text="5" />
                <NumberButton buttonStyle="numberButton" text="6" />
                <NumberButton buttonStyle="numberButton" text="1" />
                <NumberButton buttonStyle="numberButton" text="2" />
                <NumberButton buttonStyle="numberButton" text="3" />
                <NumberButton buttonStyle="numberButton fullWidth" text="0" />
            </div>
            <div className="rightHand">
                <ActionButton content="/"/>
                <ActionButton content="X"/>
                <ActionButton content="-"/>
                <ActionButton content="+"/>
                <ActionButton content="="/>
            </div>
        </div>
    );
}

export default CalculatorFunctionality;
