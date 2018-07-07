import React from 'react';
import './New.css'
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class New extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            title:"",
            location:"",
            message:""
        };  
        }

        handleChange = event => {
        const name = event.target.name;
        const value = event.target.value;
    
        this.setState({
        [name]: value
        });
        };
        
        handleSubmit = event => {
        event.preventDefault();
    
        const payload = {
        title: this.state.title,
        location: this.state.location,
        message: this.state.message
        };
    
        axios
        .post(`/event`, payload)
        .then(response => {
            // NOTIFY ASKER
            console.log(response.data);
            alert(`New notes posted`);
            // REDIRECT TO ANSWER
            this.props.history.push("/home");
        })
        .catch(error => {
            console.log(error);
            alert(`${error}`);
        });
    };

render() 
{console.log(this.state);
    return (
        
        <div className="container new">
            <div className="new-body">
                    <div>
                        <label className="new-label">Title Event</label>
                        <input className="input title" onChange={this.handleChange} id="titlenew" name="title" placeholder="Title"/>
                    </div>
                    <div>
                        <label className="new-label">Location</label>
                        <input className="input location" onChange={this.handleChange} id="locationnew" name="location"  placeholder="Location"></input>
                    </div>
                    <div>
                        <label className="label-message">Message</label>
                        <textarea className="new-textarea" onChange={this.handleChange} id="messagenew"  name="message" placeholder="Type Your Message" rows="4"></textarea>
                    </div>
                    <div className="new-button">
                        <button className="new-button-create" onClick={this.handleSubmit}>Create</button>
                    </div>
            </div>
        </div>
        );
    }   
}

export default New;