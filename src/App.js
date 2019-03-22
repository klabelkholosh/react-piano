//----- React Components ---------/
import React, { Component } from 'react';

//----- Stylesheets ---------/
import './css/App.css';

//----- My components ---------/
import Piano from './components/Piano';
import Header from './components/Header';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Piano />
      </div>
    );
  }
}

export default App;
