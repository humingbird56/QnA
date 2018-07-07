import React, { Component } from 'react';
import './Profile.css'

class Avatarprofile extends Component {
render() {
    return (
        <div className="container avatar">
            <div>
                <img className="avatar-image" src="http://via.placeholder.com/130x130" alt="test"/>
                <label className="avatar-label-profile">Andrew</label>
            </div>
        </div>
        );
    }   
}

export default Avatarprofile;