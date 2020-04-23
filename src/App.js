import React, { Component } from 'react';
// import { BrowserRouter, Switch, Route } from 'react-router-dom';
import HomePage from './HomePage';
class App extends Component {
  render() {
    return (
      <div style={{ width: '100%', overflowX: 'hidden' }}>
        <HomePage />
      </div>
    );
  }
}

export default App;
