import React, { Component } from 'react';
import './Avatar.css'
import Helpers from '../../Helpers/index'

class Avatar extends Component {
  constructor(props){
    super(props)
    this.state = {
      user: {}
    }
}
  componentDidMount() {
    this.setState({
      user: Helpers.decodeToken(localStorage.getItem('token'))
    })
  }
render() {
  const {user} = this.state
    return (
        <div className="container avatar">
            <img className="avatar-image" src="http://via.placeholder.com/100x100" alt="test"/>

            <label className="avatar-label">{user.username}</label>
        </div>
        );
    }   
}

export default Avatar;