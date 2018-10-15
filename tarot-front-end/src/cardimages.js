import React, { Component } from 'react'
import Dropdown from './dropdown'

class CardImages extends Component {
  render() {
    return(
      <div className="cardImage">
        {this.props.currentCard.img_num && <Dropdown className="imageStyle" styleSelect={this.props.styleSelect}/>}
        <br/>
        {!this.props.currentCard.img_num && <img className="cardBack" src="../images/cardBack.jpg" alt="card back"/>}
        {this.props.currentCard.img_num && <img className={this.props.cardPos ? null:'flip'} onClick={this.props.flip} src={`https://gfx.tarot.com/images/site/decks/${this.props.theme}/full_size/${this.props.currentCard.img_num}.jpg`}
        alt={this.props.currentCard.name}/>}
        <br/>
        {this.props.currentCard.img_num && <p className="imgSubtext">Click Image to Reverse</p>}
      </div>
    )
  }
}

export default CardImages;
