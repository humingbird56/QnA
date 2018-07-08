import React, { Component } from 'react';
import axios from "axios"
import './Signup.css';

class signup extends Component {
    constructor(props) {
        super(props)
        this.state = {
            username: "",
            firstname: '',
            lastname: '',
            email: "",
            password: ""
        }}
    
    // HANDLE CHANGE IN SIGN UP FORM
    
    handleChange = (e) => {
      let change = {}
      change[e.target.name] = e.target.value
      this.setState(change)
    }
    
    // HANDLE SUBMIT SIGN UP
    
    handleSubmit = event => {
        event.preventDefault()
    
        const payload = {
        username: this.state.username,
        email: this.state.email,
        password: this.state.password,
        firstname: this.state.firstname,
        lastname: this.state.lastname
        }
    
        axios
        .post(`${process.env.REACT_APP_API_URL}/register`, payload)
        .then(response => {
            alert(`Sign up success!`)
            this.setState({
                username: "",
                email: "",
                password: "",
                firstname: '',
                lastname: ''
            })
        })
        .catch(error => {
            alert(`${error}`)
            console.log(error)
        })
    }
    
    // RENDER SIGN UP FORM

    renderSignup = () => {
      const signupdata = [
        {type: 'text', name : 'firstname', className:'signup-email', placeholder:'firstname', value:this.state.firstname, onChange:this.handleChange},
        {type: 'text', name : 'lastname', className:'signup-email', placeholder:'lastname', value:this.state.lastname, onChange:this.handleChange},
        {type: 'text', name : 'username', className:'signup-email', placeholder:'name', value:this.state.username, onChange:this.handleChange},
        {type: 'email', name : 'email', className:'signup-email', placeholder:'email', value:this.state.email, onChange:this.handleChange},
        {type: 'password' ,name : 'password', className:'signup-email', placeholder:'password', value:this.state.password, onChange:this.handleChange}
      ]
      return signupdata.map(data => (
        <div>
          <input type={data.type} name={data.name} className={data.className} placeholder={data.placeholder} value={data.value} onChange={data.onChange}/>
        </div>
      ))
    }
    
render() {
  console.log(this.state)
    return (
        <div className="container signup">
            <div className="signup-body"> 
            <h1>Sign Up</h1>
            <label>Sign up for create or joining event here</label>
            <br/>
              {this.renderSignup()}
            <button className="signup-button" type="submit" onClick={this.handleSubmit}>Sign up</button>
            </div>
        </div>
        );
    }   
}

export default signup;