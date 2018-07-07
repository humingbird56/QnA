import React, { Component } from 'react';

class Profilecontent extends Component {
render() {
    return (
        <div className="container profile-content">
            <div className="content-profile-body">
            <h4 className="title-profile">Email</h4>
            <label className="content-body">andrew@gmail.com</label>
            </div>
            <div className="content-profile-body">
            <h4 className="title-profile">Experience</h4>
            <label className="content-body">Fullstack Developer</label>
            </div>
            <div className="content-profile-body">
            <h4 className="title-profile">Bio</h4>
            <label className="bio-body">Lorem ipsum dolor sit amet, consectetur adipiscing elit. In dapibus lectus id velit consectetur luctus. Quisque faucibus, risus nec fringilla viverra, lorem nunc aliquam arcu, sed bibendum dui purus ac sapien. Donec lobortis laoreet ante nec mollis. Aliquam venenatis quam velit, sit amet pretium odio sagittis eget.</label>
            </div>
        </div>
        );
    }   
}

export default Profilecontent;