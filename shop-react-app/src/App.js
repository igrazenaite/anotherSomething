import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  //goProducts = () => this.props.router.push("products");

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h2>Welcome to React</h2>
        </div>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>

        {/*  <p><button onClick={this.goProducts}
                    className="btn btn-primary"
                    role="button">
                    Go to products</button></p> */} 
      </div>
    );
  }
}

export default App;
