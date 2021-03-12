import React from 'react';

function SearchBar() {
  return(
    <div>
      <div className='container'>
        <div className="row">
          <div className="col s12">
            <h5 className='blue-grey-text darken-1 left-align'>Search Book:</h5>
            <div className="input-field col s12">
              <input id="book-searcg" type="text" className="validate"/>
              <label htmlFor='book-search'>Book</label>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SearchBar;