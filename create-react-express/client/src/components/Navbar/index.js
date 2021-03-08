import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class Navbar extends Component {
  render () {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="#" className="brand-logo">Google Books Search</Link>
            <ul id="nav-mobile" className="left hide-on-med-and-down">
              <li><Link to='/'>Search</Link></li>
              <li><Link to='/saved'>Saved</Link></li>
            </ul>
          </div>
        </nav>
      </div>
    )
  }
}

export default Navbar;