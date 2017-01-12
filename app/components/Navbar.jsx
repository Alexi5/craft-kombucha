import React, { Component } from 'react';
import { Link } from 'react-router';

class Navbar extends Component {
  renderAdminLink() {

  }

  render() {
    return (
      <nav className="navbar navbar-default">
        <div className="container-fluid">
          <div className="navbar-header">
            <Link className="navbar-brand" to="/">Craft Kombucha</Link>
          </div>
          <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
            <ul className="nav navbar-nav">
              <li>
                <form className="navbar-form">
                  <div className="form-group">
                    <input type="text" className="form-control" placeholder="Search" />
                  </div>
                </form>
              </li>
            </ul>
            <ul className="nav navbar-nav navbar-right">
              {/* Cart link displays everyone, including users not logged in */}
              <li><Link to="/order">Order</Link></li>
              {/* Admin link displays only for users logged in as admins */}
              <li><Link to="/admin">Admin</Link></li>
              {/* Logout link displays for all logged in users */}
              <li><Link to="/">Log Out</Link></li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default Navbar;
