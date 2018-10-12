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
      card: {},
      style: 'golden-thread'
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

  styleChange(event) {

  }

  render() {
    return (
      <div className="App">
        <header className="header">
          <h1>Tarot, mother fucker</h1>
          <input onChange={this.handleChange} className="searchInput" placeholder="Card..."/>
          <select onChange={this.styleChange}>
            <option value='8-bit'>8-bit</option>
            <option value='archeon' >archeon</option>
            <option value='cat-people' >cat-people</option>
            <option value='celestial' >celestial</option>
            <option value='crows-magick' >crows-magick</option>
            <option value='hermetic' >hermetic</option>
            <option value='modern-medieval' >modern-medieval</option>
            <option value='whimsical' >whimsical</option>
            <option value='golden-thread' >golden-thread</option>

          </select>
        </header>
        <div className="cardList">
          {this.state.data.map( card => <button className="cardButton" onClick={() => this.cardClick(card._id)} key={card._id}>{card.name}</button>)}
        </div>
        <div className="cardDisplay">
          <img src={`https://gfx.tarot.com/images/site/decks/golden-thread/full_size/${this.state.card.img_num}.jpg`}/>
          <div className="cardDisplay">
             {this.state.card.name && <p>Name:  <span>{this.state.card.name}</span></p>}
             {this.state.card.suit && <p>Suit:  <span>{this.state.card.suit}</span></p>}
             {this.state.card.type && <p>Type:  <span>{this.state.card.type}</span></p>}
             {this.state.card.meaning_up && <p>Meaning Up:  <span>{this.state.card.meaning_up}</span></p>}
             {this.state.card.meaning_rev && <p>Meaning Reversed:  <span>{this.state.card.meaning_rev}</span></p>}
             {this.state.card.desc && <p>Description:  <span>{this.state.card.desc}</span></p>}
           </div>
        </div>
        <footer className="footer">

        </footer>
      </div>
    );
  }
}


export default App;
