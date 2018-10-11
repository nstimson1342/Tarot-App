import React, { Component } from 'react';
import './App.css';
// import Fuse from 'fuse';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  handleSubmit(event) {
    let searchTerm = this.state.value.replace(/\s/g, "+")
    fetch(`http://localhost:5000/api/cards`)
      .then(response => response.json())
      .then((data) => {
        this.setState({
          results: data[0]['cards']
        })
        console.log(this.state.results)
      })
    }


  handleChange(event) {
    this.setState({
      value: event.target.value
    })
  }



  render() {
    return (
      <div className="App">
        <header>
          <h1>Tarot, mother fucker</h1>
          <input onChange={this.handleChange} className="search-input" placeholder="search..."/>
          <button onClick={this.handleSubmit} value="search" type='button' id='search'>Search</button>
        </header>
      </div>
    );
  }
}


export default App;
