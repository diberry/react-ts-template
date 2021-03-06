import React from 'react';
import logo from './logo.svg';
import './App.css';
import DxbSelect from './component-select/select';
import { hot } from 'react-hot-loader';


  function App() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            <DxbSelect />
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
        </a>
        </header>
      </div>
    );
  }


  export default hot(module)(App);
