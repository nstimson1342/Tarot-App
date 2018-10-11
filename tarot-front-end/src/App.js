import React, { Component } from 'react';
import './App.css';
// import Fuse from 'fuse';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: '',
      data: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);

  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/cards`)
      .then(response => response.json())
      .then(data => {this.setState({
          data: data
        })
      })
  }

  handleSubmit(event) {

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
        <div className="cardList">
          {this.state.data.map( card => <p key={card._id}>{card.name}</p>)}
        </div>
      </div>
    );
  }
}


export default App;
