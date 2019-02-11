import React from 'react';
import './CalculatorFunctionality.css'
import ActionButton from '../ButtonComponents/ActionButton';
import NumberButton from '../ButtonComponents/NumberButton';

const CalculatorFunctionality = () => {
    return (
        <div className="functionalityHolder">
            {/* leftHand will have display: flex, reverse row */}
            <div className="leftHand">
                <NumberButton className="fullWidth">0</NumberButton>
                <NumberButton num="1" />
                <NumberButton num="2" />
                <NumberButton num="3" />
                <NumberButton num="4" />
                <NumberButton num="5" />
                <NumberButton num="6" />
                <NumberButton num="7" />
                <NumberButton num="8" />
                <NumberButton num="9" />
                <ActionButton content="clear" />
            </div>
            <div className="rightHand">
                <ActionButton>Test</ActionButton>
                <ActionButton>Test</ActionButton>
                <ActionButton>Test</ActionButton>
                <ActionButton>Test</ActionButton>
                <ActionButton>Test</ActionButton>
            </div>
        </div>
    );
}

export default CalculatorFunctionality;
