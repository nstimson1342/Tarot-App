import React, { Component } from 'react';
import './App.css';
import Searchbar from './searchbar'
import DescriptionBox from './descriptionbox'
import CardImages from './cardimages'

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      results: [],
      value: '',
      data: [],
      card: {},
      style: 'hermetic',
      upright: true,
    }
  this.handleChange = this.handleChange.bind(this);
  this.cardClick = this.cardClick.bind(this);
  this.styleChange = this.styleChange.bind(this);
  this.reverseMeaning = this.reverseMeaning.bind(this);
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
    console.log('hey')
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
    this.setState({
      style: event.target.value
    })
  }

  reverseMeaning(event) {
    const audio = new Audio('../sounds/sound.mp3');
    audio.play()
     if (this.state.upright) {
       this.setState({
         upright: false,
       })
     } else {
       this.setState({
         upright: true,
       })
     }
 }

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <h1>Tarotpedia</h1>
        </header>
        <div className="App-main">
          <Searchbar searchCards={this.handleChange} cardList={this.state.data} selectCard={this.cardClick}/>
          <CardImages currentCard={this.state.card} cardPos={this.state.upright} flip={this.reverseMeaning} styleSelect={this.styleChange} theme={this.state.style}/>
          <DescriptionBox currentCard={this.state.card} cardPos={this.state.upright}/>
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
