import React, { Component } from 'react'

class DescriptionBox extends Component {
render() {
  return(
    <div className="cardDescription">
      {!this.props.currentCard.name &&
        <p className="appIntro"><span className="introHeader">Welcome to Tarotpedia!</span>
        <br/><br/>
        <span className="introBody">Please select a card on the left to learn more about it. If you are looking for a specific card enter it's name in the search bar.</span>
        <br/><br/>
        <span className="introFooter">Thank you for choosing Tarotpedia!</span>
      </p>}
     {this.props.currentCard.name &&
       <p className="descTitle">Name:  <span className="descContent">{this.props.currentCard.name}</span></p>}
     {this.props.currentCard.suit &&
       <p className="descTitle">Suit:  <span className="descContent">{this.props.currentCard.suit}</span></p>}
     {this.props.currentCard.type &&
       <p className="descTitle">Type:  <span className="descContent">{this.props.currentCard.type}</span></p>}
     {this.props.currentCard.meaning_up && this.props.cardPos &&
       <p className="descTitle">Meaning Up:
         <span className="descContent">{this.props.currentCard.meaning_up}</span>
       </p>}
     {this.props.currentCard.meaning_rev && !this.props.cardPos &&
       <p className="descTitle">Meaning Reversed:
         <span className="descContent">{this.props.currentCard.meaning_rev}</span>
     </p>}
     {this.props.currentCard.desc &&
       <p className="descTitle">Description:
         <span className="descContent">{this.props.currentCard.desc}</span>
       </p>}
    </div>
    )
  }
}

export default DescriptionBox
