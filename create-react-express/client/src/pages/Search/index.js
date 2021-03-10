import React, { Component } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import SearchBar from '../../components/SearchBar';
import BookResults from '../../components/BookResults';

class Search extends Component {
  render() {
    return(
      <div>
        <Navbar/>
        <Hero/>
        <SearchBar/>
        <BookResults/>
      </div>
    )
  }
}

export default Search;