import React, { useState } from 'react';
import Navbar from '../../components/Navbar';
import Hero from '../../components/Hero';
import SavedBook from '../../components/SavedBook';
import API from '../../utils/API';

function Saved () {

  const [books, setBooks] = useState([])

  function displaySavedBooks() {
    API.getBooks()
        .then(res => {
            setBooks(res.data)
        }
        )
        .catch(err => console.log(err));
}


  function handleBookDelete(e) {
    e.preventDefault();
    for (let i = 0; i < books.length; i++) {
      if (e.target.id === books[i].id) {
        API.deleteBook(books[i].id)
        .then(res => displaySavedBooks(res))
        .catch(err => console.log(err));
      }
    }  
  }


  return(
    <div>
      <Navbar/>
      <Hero/>
      {books.map(book => {
        return (
          <SavedBook
            key={book.id}
            title={book.title}
            author={book.authors}
            description={book.description}
            image={book.description}
            link={book.link}
            handleBookDelete={handleBookDelete}/>
        )
      })}
    </div>
  )
}

export default Saved;