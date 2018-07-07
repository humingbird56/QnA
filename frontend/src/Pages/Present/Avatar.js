import React, { Component } from 'react';
import './Present.css'

class Avatar extends Component {
render() {
    return (
        <div className="container avatar">
            <img className="avatar-image" src="http://via.placeholder.com/100x100" alt="test"/>
            <label className="avatar-label">Andrew</label>
        </div>
        );
    }   
}

export default Avatar;