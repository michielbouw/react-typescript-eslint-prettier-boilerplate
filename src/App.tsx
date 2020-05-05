import './App.scss';

import React from 'react';

import logo from './logo.svg';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <h1>Typescript React project boilerplate with ESLint and Prettier</h1>
        <p>This project is initialized with Create React App</p>
        <h2>This project is consisting of:</h2>
        <ul>
          <li>TypeScript</li>
          <li>React (16+)</li>
          <li>react-scripts (createReactApp)</li>
          <li>react-testing-library (not Enzyme)</li>
          <li>SASS/SCSS</li>
          <li>ESLint (instead of deprecated TSLint)</li>
          <li>Prettier</li>
        </ul>
        <a
          className="App-link"
          href="https://github.com/facebook/create-react-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Get more info on Create React App
        </a>
      </header>
    </div>
  );
}

export default App;
