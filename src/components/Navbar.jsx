import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Navbar extends React.Component {
  render(){
    return (
        <div>
          <nav className="navbar navbar-default">
            <div className="container">
              <div className="navbar-header">
                <button type="button" className="navbar-toggle collapsed" data-toggle="collapse" data-target="#navbar" aria-expanded="false" aria-controls="navbar">
                  <span className="sr-only">Toggle navigation</span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                  <span className="icon-bar"></span>
                </button>
                <a className="navbar-brand" href="#">My Github Profile</a>
              </div>
            </div>
          </nav>
        </div>
    );
  }
}
