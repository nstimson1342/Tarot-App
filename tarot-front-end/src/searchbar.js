import React, {Component} from 'react'

class Searchbar extends Component {
  render() {
    return(
      <div className="searchBar">
        <input onChange={(e) => this.props.searchCards(e)} className="searchInput" placeholder="Enter Card Name..."/>
        <div className="cardList">
          {this.props.cardList.map( card => <button className="cardButton" onClick={(e) => this.props.selectCard(card._id)} key={card._id}>{card.name}</button>)}
        </div>
      </div>
    )
  }
}

export default Searchbar;
