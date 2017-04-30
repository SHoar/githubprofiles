import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Profile extends Component {
  render(){
    return (
            <div className="panel panel-default">

                <div className="panel-heading">
                  <h3 className="panel-title">{this.props.userData.name}</h3>
                </div>

                <div className="panel-body">
                    <div className="row">
                        <div className="col-md-4">
                          <img src={this.props.userData.avatar_url} className="thumbnail" style={{width:"100%"}} />
                        </div>

                        <div className="col-md-8">
                          <div className="row">
                            <div className="col-md-12"><span className="label label-primary">{this.props.userData.public_repos} Repos</span>
                              <span className="label label-success">{this.props.userData.public_gists} Gists</span>
                              <span className="label label-info">{this.props.userData.followers} Followers</span>
                              <span className="label label-danger">{this.props.userData.following} Following</span>
                            </div>
                          </div>

                          <hr />

                          <div className="row">
                            <div className="col-md-12">
                              <ul className="list-group">
                                <li className="list-item"><strong>Username: </strong> {this.props.userData.name}</li>
                                <li className="list-item"><strong>Location: </strong> {this.props.userData.location}</li>
                                <li className="list-item"><strong>Email: </strong> {this.props.userData.email}</li>
                              </ul>
                            </div>
                          </div>

                        </div>
                    </div>
                </div>

            </div>
          );
    }
  }
