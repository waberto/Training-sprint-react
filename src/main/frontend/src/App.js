import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import ProductList from './components/ProductList'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2 className="App-title">Welcome to React App</h2>
        </header>

        <ProductList />

        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
          </p>
      </div>
    );
  }
}

export default App;
