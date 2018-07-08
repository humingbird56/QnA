import React, { Component } from 'react';
import axios from 'axios'
import './Home.css'
import Avatar from './Avatar'
import helpers from "../helpers";

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[],
            answer: ''
        }
    }
        async componentDidMount(){
        const RESPONSE = await fetch(`${process.env.REACT_APP_API_URL}/question`)
        const DATA = await RESPONSE.json()
        console.log(DATA)
        this.setState({
        data:DATA
            }
        )
    }

    inputAnswer = (e) => {
      this.setState({
        answer: e.target.value
      })
    }

    submitAnswer = (data) => {
      console.log('data', data)
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/answer`,
        headers: {
          token: localStorage.getItem('token')
        },
        data: {
          answer: this.state.answer,
          questionId: data.id
        }
      })
        window.location.reload();
    }

    renderHome() {
      if (!this.state.data) {
        return null
      } else {
        return(
          this.state.data.map(data => (
            <div key={data.id} className="home-body">
                <div className="home-layout">
                    <div className="home-avatar">
                        <Avatar/> 
                    </div>
                    <div className="home-content">
                        <div>
                            <h2 className="title">Question</h2>
                            <p className="title-content">{data.question}</p>
                            <h2 className="title">Answer</h2>
                            {data.answers.map(data => (
                              <p key={data.id} className="location-content">{data.answer}</p>
                            ))}
                            <h2 className="title">Add New Answer</h2>
                            <input value={this.state.answer} onChange={this.inputAnswer}/>
                            <button onClick={() => this.submitAnswer(data)}>Submit</button>
                        </div>                        
                    </div>
                </div>
            </div>
            ))
        )
      }
    }

render() {
    return (
        <div className="container home">
          {this.renderHome()}
        </div>
        );
    }   
}

export default Home;