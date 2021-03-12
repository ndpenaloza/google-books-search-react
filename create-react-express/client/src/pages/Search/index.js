import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import BookResults from '../../components/BookResults';
import API from '../../utils/API';

function Search() {

  const APIKey = process.env.REACT_APP_GOOGLE_API_KEY;

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function handleInputChange(e) {
    e.preventDefault();

    const { name, value } = e.target;

    let bookValue = value.trim().split(' ').join('+');

    setFormObject({...formObject, [name]: bookValue})
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    const url = `https://www.googleapis.com/books/v1/volumes?q=${formObject.searchedBook}&key=${APIKey}`;
    API.getBooks(url)
      .then(res => {
        setBooks(res.data);
        document.getElementById('book-search').value='';
        setFormObject({searchedBook: ''})
      })
      .catch(err => console.log(err));
      
    }

    function handleSavedBook(e) {
      e.preventDefault();
      for (let i = 0; i < books.length; i++) {
        if (e.target.id === books[i].id) {
          API.saveBook({
            bookID: books[i].id,
            title: books[i].volumeInfo.title,
            authors: books[i].volumeInfo.authors,
            description: books[i].volumeInfo.description,
            image: books[i].volumeInfo.imageLinks,
            link: books[i].volumeInfo.infoLink
          })
          .then(res => console.log('book saved'))
          .catch(err => console.log(err));
        }
      }
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
                <input id="book-search" type="text" className="validate"onChange={handleInputChange}/>
                <label htmlFor='book-search'>Book</label>
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