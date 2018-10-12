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
          <div className="searchBar">
            <input onChange={this.handleChange} className="searchInput" placeholder="Enter Card Name..."/>
            <div className="cardList">
              {this.state.data.map( card => <button className="cardButton" onClick={() => this.cardClick(card._id)} key={card._id}>{card.name}</button>)}
            </div>
          </div>
          <div className="cardImage">
            {this.state.card.img_num && <select className="imageStyle" onChange={this.styleChange}>
              <option value='hermetic' >hermetic</option>
              <option value='golden-thread' >golden-thread</option>
              <option value='8-bit'>8-bit</option>
              <option value='archeon' >archeon</option>
              <option value='cat-people' >cat-people</option>
              <option value='celestial' >celestial</option>
              <option value='crows-magick' >crows-magick</option>
              <option value='modern-medieval' >modern-medieval</option>
              <option value='whimsical' >whimsical</option>
            </select>}
            <br/>
            {!this.state.card.img_num && <img className="cardBack" src="../images/cardBack.jpg" alt="card back"/>}
            {this.state.card.img_num && <img className={this.state.upright ? null:'flip'} onClick={this.reverseMeaning} src={`https://gfx.tarot.com/images/site/decks/${this.state.style}/full_size/${this.state.card.img_num}.jpg`}/>}
            <br/>
            {this.state.card.img_num && <p className="imgSubtext">Click Image to Reverse</p>}
          </div>
          <div className="cardDescription">
            {!this.state.card.name &&
              <p className="appIntro"><span className="introHeader">Welcome to Tarotpedia!</span>
              <br/><br/>
              <span className="introBody">Please select a card on the left to learn more about it. If you are looking for a specific card enter it's name in the search bar.</span>
              <br/><br/>
              <span className="introFooter">Thank you for choosing Tarotpedia!</span>
            </p>}
           {this.state.card.name &&
             <p className="descTitle">Name:  <span className="descContent">{this.state.card.name}</span></p>}
           {this.state.card.suit &&
             <p className="descTitle">Suit:  <span className="descContent">{this.state.card.suit}</span></p>}
           {this.state.card.type &&
             <p className="descTitle">Type:  <span className="descContent">{this.state.card.type}</span></p>}
           {this.state.card.meaning_up && this.state.upright &&
             <p className="descTitle">Meaning Up:
               <span className="descContent">{this.state.card.meaning_up}</span>
             </p>}
           {this.state.card.meaning_rev && !this.state.upright &&
             <p className="descTitle">Meaning Reversed:
               <span className="descContent">{this.state.card.meaning_rev}</span>
           </p>}
           {this.state.card.desc &&
             <p className="descTitle">Description:
               <span className="descContent">{this.state.card.desc}</span>
             </p>}
          </div>
        </div>
        <footer className="App-footer">
        </footer>
      </div>
    );
  }
}

export default App;
