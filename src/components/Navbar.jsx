import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends React.Component {
  render(){
    return (
        <div>
          <nav className="nav navbar-default">
            <ul className="nav navbar-default">
              <li className="navbar-brand">Home</li>
              <li className="navbar-brand">About</li>
              <li className="navbar-brand">Contact</li>
            </ul>
          </nav>
        </div>
    );
  }
}
