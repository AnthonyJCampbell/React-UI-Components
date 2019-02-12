import React from 'react';
import './App.css';
import './components/HeaderComponents/HeaderContainer';
import HeaderContainer from './components/HeaderComponents/HeaderContainer';
import CardContainer from './components/CardComponents/CardContainer';

const App = () => {
  return (
    <div class="holder">
      <HeaderContainer />
      <a href="https://www.reactjs.org" target="_blank" rel="noopener noreferrer">
        <CardContainer />
      </a>
    </div>
  );
};

export default App;
