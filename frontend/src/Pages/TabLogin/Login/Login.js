import React from 'react';
import "./Login.css";
import axios from 'axios';
import helpers from "../../helpers";
import Button from '../../../Component/Button/Button'

class Login extends React.Component{
	constructor(props) {
	super(props);
		this.state = {
			loginemail: "",
			loginpassword: ""
		};
	}

    // HANDLE CHANGE IN LOGIN FORM
	handleChange = e => {
		const name = e.target.name;
		const value = e.target.value;
		this.setState({
		[name]: value
		});
	};

    // HANDLE SUBMIT LOGIN

    handleSubmit = event => {
    event.preventDefault();

    if(this.state.loginemail.length === 0) {
        alert("email cannot be empty")
        return
    }
    else if(this.state.loginpassword.length === 0) {
        alert("password cannot be empty")
        return
    }

    axios({
			method: 'POST',
			url: `${process.env.REACT_APP_API_URL}/login`,
			data: {
        email: this.state.loginemail,
				password: this.state.loginpassword
			}
		})
		.then( response => {
			if(response.data.token) {
				helpers.setToken(response.data.token)
				this.props.history.push("/home");
			} else {
				throw new Error()
			}
		}) 
		.catch( err => console.log(err))
};

// RENDER LOGIN FORMrender

render() {
	return (
		<div className="container login">
				<div className="login-body">
						<div className="login-divide">
								<div>
										<h1>Sign in</h1>
										<label>Make Any Meetup Simple</label>
										<br/>
										<br/>
										<div className="login-body-email">
										<input type="email" id="loginemail" name="loginemail" className="login-email" placeholder="email" value={this.state.loginEmail} onChange={this.handleChange}/>
										</div>
										<div className="login-body-password">
										<input type="password" id="loginpassword" name="loginpassword" className="login-email" placeholder="password" value={this.state.loginPassword} onChange={this.handleChange}/>
										</div>
                    <Button className={'medium primary medium-border text-white wide margin-small'} text={'Sign in'} onClick={this.handleSubmit}/>
										{/* <button className="login-button" type="submit" onClick={this.handleSubmit}>Sign In</button> */}
								</div>
						</div>
				</div>
		</div>
		);
	}   
}

export default Login;