import React from 'react';

function SavedBook(props) {

  return(
    <div>
      <div className='container'>
        <div className="col s12">
          <div className="card horizontal" key={props.id}>
            <div className="card-image">
              <img src={props.image} alt='Cover of'/>
            </div>
            <div className="card-stacked">
              <div className="card-content">
                <h5 class='left-align'>{props.title}</h5>
                <p class='left-align'>{props.authors}</p>
                <p class='left-align'>{props.description}</p>
              </div>
              <div className="card-action left-align">
                <a className="waves-effect waves-light btn left-align blue-grey darken-1" href={props.link}>View</a>
                <button className="waves-effect waves-light btn left-align blue-grey darken-1" onClick={props.handleBookDelete}>Delete</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default SavedBook;