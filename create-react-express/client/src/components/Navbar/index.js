import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import M from 'materialize-css'

class Navbar extends Component {

  // componentDidMount() {
  //     var elems = document.querySelectorAll('.sidenav');
  //     var instances = M.Sidenav.init(elems, options);
  //   };
  // }

  render() {
    return(
      <div>
        <nav>
          <div className="nav-wrapper">
            <Link to="#!" className="brand-logo center">Google Books Search</Link>
            <Link to="#" data-target="mobile-demo" className="sidenav-trigger"><i className="material-icons">menu</i></Link>
            <ul className="right hide-on-med-and-down">
              <li><Link to="/">Search</Link></li>
              <li><Link to="/saved">Saved</Link></li>
            </ul>
          </div>
        </nav>

        <ul className="sidenav" id="sidenav">
          <li><Link to="/">Search</Link></li>
          <li><Link to="/saved">Saved</Link></li>
        </ul>
      </div>
    )
  }
}

export default Navbar;