import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import SavedBook from '../../components/SavedBook';

class Saved extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Hero/>
        <SavedBook/>
      </div>
    )
  }
}

export default Saved;