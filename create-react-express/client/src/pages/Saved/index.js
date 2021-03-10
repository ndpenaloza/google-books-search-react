import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import BookResults from '../../components/BookResults';

class Saved extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Hero/>
        <BookResults/>
      </div>
    )
  }
}

export default Saved;