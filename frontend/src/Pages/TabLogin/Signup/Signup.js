import React, { Component } from 'react';
import axios from "axios"
import './Signup.css';

class signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            signupName: "",
            signupEmail: "",
            signupPassword: ""
        };
    }
    
    // HANDLE CHANGE IN SIGN UP FORM
    
    handleChange = event => {
        const name = event.target.name
        const value = event.target.value
    
        this.setState({
        [name]: value
        })
        console.log(name)
    }
    
    // HANDLE SUBMIT SIGN UP
    
    handleSubmit = event => {
        event.preventDefault()
    
        const payload = {
        name: this.state.signupName,
        email: this.state.signupEmail,
        password: this.state.signupPassword
        }
    
        axios
        .post(`${process.env.REACT_APP_API_URL}/signup`, payload)
        .then(response => {
            alert(`Sign up success!`)
            this.setState({
                signupName: "",
                signupEmail: "",
                signupPassword: ""
            })
        })
        .catch(error => {
            alert(`${error}`)
            console.log(error)
        })
    }
    
    // RENDER SIGN UP FORM
    
render() {
    return (
        <div className="container signup">
            <div className="signup-body"> 
            <h1>Sign Up</h1>
            <label>Sign up for create or joining event here</label>
            <br/>
            <br/>
            <div>
            <input type="text" id="signupName" name="signupName" className="signup-email" placeholder="name" value={this.state.signupName} onChange={this.handleChange} />
            </div>
            <div>
            <input type="email" id="signupEmail" name="signupEmail" className="signup-email" placeholder="email" value={this.state.signupEmail} onChange={this.handleChange} />
            </div>
            <div>
            <input type="password" id="signupPassword" name="signupPassword" className="signup-email" placeholder="password" value={this.state.signupPassword} onChange={this.handleChange} />
            </div>
            <button className="signup-button" type="submit" onClick={this.handleSubmit}>Sign up</button>
            </div>
        </div>
        );
    }   
}

export default signup;