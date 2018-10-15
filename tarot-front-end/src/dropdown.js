import React, { Component } from 'react';

class Dropdown extends Component {
  render() {
    return (
        <select onChange={(e) => this.props.styleSelect(e)}>
          <option value='hermetic' >hermetic</option>
          <option value='golden-thread' >golden-thread</option>
          <option value='8-bit'>8-bit</option>
          <option value='archeon' >archeon</option>
          <option value='cat-people' >cat-people</option>
          <option value='celestial' >celestial</option>
          <option value='crows-magick' >crows-magick</option>
          <option value='hermetic' >hermetic</option>
          <option value='modern-medieval' >modern-medieval</option>
          <option value='whimsical' >whimsical</option>
        </select>
    )
  }
}

export default Dropdown;
