import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  render(){
    return (
            <div>
              <Navbar />
              <Jumbotron  />
              <Footer />
            </div>
    );
  }
}

export default App
