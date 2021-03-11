import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import BookResults from '../../components/BookResults';

function Search() {
  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleInputChange(e) {
    e.preventDefault();
    const { name, value } = e.target;
    setFormObject({...formObject, [name]: value})
  }

  function handleFormSubmit(e) {
    e.preventDefault();

  }

    return(
      <div>
        <Navbar/>
        <Hero/>
        <div className='container'>
        <div className="row">
          <div className="col s12">
            <h5 className='blue-grey-text darken-1 left-align'>Search Book:</h5>
            <div className="input-field col s12">
              <input id="book-searcg" type="text" className="validate"onChange={handleInputChange}/>
              <label for='book-search'>Book</label>
              <a className="waves-effect waves-light btn left-align blue-grey darken-1" href='#' onClick={handleFormSubmit}>Search</a>
            </div>
          </div>
        </div>
      </div>
        <BookResults/>
      </div>
    )
}

export default Search;