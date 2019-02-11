import React from 'react';
import './App.css';
import CalculatorDisplay from './components/DisplayComponents/CalculatorDisplay';
import CalculatorFunctionality from './components/CalculatorFunctionality/CalculatorFunctionality';


const App = () => {
  return (
    // Holder div aka .container
    <div className="container">
      <CalculatorDisplay />
      <div className="calculatorButtons">
        <CalculatorFunctionality />
      </div>
    </div>
  );
};

export default App;
