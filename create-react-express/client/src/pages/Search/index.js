import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
// import BookResults from '../../components/BookResults';
import API from '../../utils/API';
// import M from 'materialize-css';
import uuid from 'uuid';

function Search() {

  const APIKey = process.env.REACT_APP_GOOGLE_API_KEY;
  // const APIKey = 'AIzaSyBnIEeyIOzFIeaLwfGE94tKQkdZ_BfYQYk'
  console.log(APIKey)

  const [books, setBooks] = useState([])
  const [formObject, setFormObject] = useState({})

  function bookSearched(data) {
    setBooks(data.items);
}

  let bookValue;


  function handleInputChange(e) {

    if (process.env.REACT_APP_GOOGLE_API_KEY) {
      console.log('We are good')
    } else {
      console.log('we are not good')
    }

    const { name, value } = e.target;
  
    bookValue = value.trim().split(' ').join('+');

    setFormObject({...formObject, [name]: bookValue})

    console.log(bookValue);

    console.log()
    
  }


  function handleFormSubmit(e) {
    e.preventDefault();

    let url = `https://www.googleapis.com/books/v1/volumes?q=${formObject.name}&key=${APIKey}`;
    console.log(url);
    API.findBooks(url)
      .then(res => {
        bookSearched(res.data);
        setFormObject({search: ''})
        document.getElementById('book-search').value='';
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
        }}
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
                <button className="waves-effect waves-light btn left-align blue-grey darken-1" onClick={handleFormSubmit}>Search</button>
              </div>
            </div>
          </div>
        </div>
        {/* <BookResults/> */}
        {books.map(book => {
          return(
        <div className='container' key={uuid()}>
        <div className="col s12">
          <div className="card horizontal">
            <div className="card-image">
              <img src={book.image} alt='Cover of'/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 className='left-align'>{book.title}</h5>
                <p className='left-align'>{book.authors}</p>
                <p className='left-align'>{book.description}</p>
              </div>
              <div className="card-action left-align">
                <a className="waves-effect waves-light btn left-align blue-grey darken-1" href={book.link}>View</a>
                <a className="waves-effect waves-light btn left-align blue-grey darken-1" onClick={handleSavedBook}>Save</a>
              </div>
            </div>
          </div>
        </div>
      </div>
        )})}
      </div>
    )
}

export default Search;