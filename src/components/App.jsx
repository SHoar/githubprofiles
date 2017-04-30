import React, {Component} from 'react';
import ReactDOM from 'react-dom';
import t from 'prop-types';
import Navbar from './Navbar.jsx';
import Profile from './github/Profile.jsx';
import RepoList from './github/RepoList.jsx';
import Search from './github/Search.jsx';

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      userName: 'SHoar',
      userData: [],
      userRepos: [],
      perPage: 10
    }
  }

  // Get user data from Github
  getUserData() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'?client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret,
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userData: data});
      }.bind(this),
      error: function (xhr, status, err){
        this.setState({userName: null});
        alert("That Username is "+err);
      }.bind(this)
    });
  }

  // Get User Repos
  getUserRepos() {
    $.ajax({
      url: 'https://api.github.com/users/'+this.state.userName+'/repos?per_page='+this.state.perPage+'&client_id='+this.props.clientId+'&client_secret='+this.props.clientSecret+'&sort=created',
      dataType: 'json',
      cache: false,
      success: function(data){
        this.setState({userRepos: data});
      }.bind(this),
      error: function (xhr, status, err){
        this.setState({userName: null});
      }.bind(this)
    });
  }

  handleFormSubmit(username){
      this.setState({userName: username}, function(){
          this.getUserData();
          this.getUserRepos();
      });
  }

  componentDidMount(){
    this.getUserData();
    this.getUserRepos();
  }

  render(){
    return (
            <div>
                <Navbar />
                <div className="container">
                    <Search onFormSubmit = {this.handleFormSubmit.bind(this)}/>
                </div>
                <br />
                <div className="container">
                    <div className="row">
                        <div className="col-md-12">
                            <Profile {...this.state} />
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
