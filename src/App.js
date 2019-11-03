import React, { Component } from 'react';
// import logo from './logo.svg';
import './App.css';
import Clock from './Clock';
import Products from './Products.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <p className="App-intro">
          Hi, it's {this.props.name}!
        </p>
        <Clock></Clock>
        <section>
          <Products ></Products>
        </section>
      </div>
    );
  }
}

export default App;
