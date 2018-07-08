import React from 'react';
import './New.css'
import axios from "axios"

axios.defaults.baseURL = process.env.REACT_APP_API_URL;

class New extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            question:""
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
        question: this.state.question
        };
    
        axios
        .post(`${process.env.REACT_APP_API_URL}/question`, payload)
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
              <div className='content'>
                  <label className="label-question">Question</label>
                  <textarea className="new-textarea" onChange={this.handleChange} id="questionnew"  name="question" placeholder="Type Your question" rows="4"></textarea>
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