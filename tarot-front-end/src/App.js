import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state = {
    name: undefined,
    desc: undefined
  }

  async componentDidMount() {
    try {
      const api_call = await fetch('http://localhost:5000/api/cards');
      const data = await api_call.json()
      console.log(data)
      this.setState({
        name: data[0].name,
        desc: data[0].desc
      })
    } catch(err) {
      console.log(err)
    }
  }


  render() {
    return (
      <div className="App">
        <h1>Its working! Its WORKING!!! this is tarot stuff</h1>
        <p>{this.state.name}: {this.state.desc}</p>
      </div>
    );
  }
}

export default App;
