import React, {Component} from 'react';

class BookResults extends Component {
  render() {
    return(
      <div>
        <div className='container'>
          <div className="col s12">
            <div className="card horizontal">
              <div className="card-image">
                <img src="https://lorempixel.com/100/190/nature/6" alt='Cover of'/>
              </div>
              <div className="card-stacked">
                <div className="card-content">
                  <h5 class='left-align'>Title: </h5>
                  <p class='left-align'>Written By: </p>
                  <p class='left-align'>Description: </p>
                </div>
                <div className="card-action left-align">
                  <a className="waves-effect waves-light btn left-align blue-grey darken-1" href='#'>View</a>
                  <a className="waves-effect waves-light btn left-align blue-grey darken-1" href='#'>Save</a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    )
  }
}

export default BookResults;