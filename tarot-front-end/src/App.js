import React, { Component } from 'react';
import './App.css';

class App extends Component {
  constructor () {
    super()
    this.state = {
      isLoaded: false,
      card: {}
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Its working! Its WORKING!!! this is tarot stuff</h1>
      </div>

    );
  }
}

export default App;
