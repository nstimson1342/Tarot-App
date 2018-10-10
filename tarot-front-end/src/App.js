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

  componentDidMount() {
    console.log("whatever")
    fetch("/api/card/5bbbdf2b05896ab069e6b171")
      .then(res => res.json())
      .then(card => {
        this.setState({card:card})
          console.log(card)
      })

    //   .then(
    //     (result) => {
    //       console.log(result)
    //       this.setState({
    //         isLoaded: true,
    //       });
    //     },
    //
    //     (error) => {
    //       this.setState({
    //         isLoaded: true,
    //         error
    //       });
    //     }
    //   )
  }
  render() {
    return (
      <div className="App">
        <img src={`https://gfx.tarot.com/images/site/decks/vampire/full_size/${this.state.card.value_int}.jpg`} alt="The Magician" />
      </div>

    );
  }
}

export default App;
