import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import t from 'prop-types';
import Navbar from './Navbar.jsx';
import Jumbotron from './Jumbotron.jsx';
import Footer from './Footer.jsx'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'SHoar',
      userData: [],
      userRepos: [],
      perPage: 5
    }
  }
  render(){
    return (
            <div>
              <Navbar />
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    {this.props.clientId}
                  </div>
                </div>
              </div>
            </div>
    );
  }
}

App.propTypes = {
  clientId: t.string,
  clientSecret: t.string
}
App.defaultProps = {
  clientId: '40e087e1e45234da22c1',
  clientSecret: '89a7d4d98ea6c646c9a45b41fbb69ff5b8c00441'
}

export default App
