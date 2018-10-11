import React, { Component } from 'react';
import './App.css';
// import Fuse from 'fuse';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: '',
      data: [],
      card: {}
    }
  this.handleChange = this.handleChange.bind(this);
  this.cardClick = this.cardClick.bind(this);
  }

  componentDidMount() {
    fetch(`http://localhost:5000/api/cards`)
      .then(response => response.json())
      .then(data => {this.setState({
          data: data,
          results: data
        })
      })
  }

  handleChange(event) {
    if (event.target.value.length) {
      this.setState({
        data: this.state.results.filter((card) => card.name.toLowerCase().includes(event.target.value.toLowerCase()))
      })
    } else {
      this.setState({
        data: this.state.results
      })
    }
  }

  cardClick(key) {
    fetch(`http://localhost:5000/api/cards/${key}`)
      .then(response => response.json())
      .then(data => this.setState({
        card: data
        })
      )
  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Tarot, mother fucker</h1>
          <input onChange={this.handleChange} className="searchInput" placeholder="Card..."/>
        </header>
        <div className="cardList">
          {this.state.data.map( card => <button className="cardButton" onClick={() => this.cardClick(card._id)} key={card._id}>{card.name}</button>)}
        </div>
        <div className="cardDisplay">
          Name: {this.state.card.name}<br/><br/>
          Suit: {this.state.card.suit}<br/><br/>
          Type: {this.state.card.type}<br/><br/>
          Meaning Up: {this.state.card.meaning_up}<br/><br/>
          Meaning Reverse: {this.state.card.meaning_rev}<br/><br/>
          Description: {this.state.card.desc}<br/><br/>
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}


export default App;
