import React, {Component} from 'react';

export default class Search extends Component {
    onSubmit(e){
        e.preventDefault();
        let username = this.refs.username.value.trim();
        if(!username){
            alert('Please enter a username');
            return;
        }
        this.props.onFormSubmit(username);
        this.refs.username.value='';
    }

    render(){
        return (
                <div>
                    <form onSubmit={this.onSubmit.bind(this)}>
                        <label>Search Github Usernames</label>
                        <input type="text" ref="username" className="form-control" placeholder="Type a username, then hit ENTER to search" />
                    </form>
                </div>
                );
    }
 }
