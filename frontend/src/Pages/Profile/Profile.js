import React, { Component } from 'react';
import Avatarprofile from '../../Component/Avatar/Avatar'
import Profilecontent from './Content'

class Profile extends Component {
render() {
    return (
        <div className="container profile">
            <div className="profile-body">
                <div className="profileavatar">
                    <Avatarprofile/>
                </div>
                <div className="profilecontent">
                    <Profilecontent/>
                </div>
            </div>
        </div>
        );
    }   
}

export default Profile;