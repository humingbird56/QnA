import React, { Component } from 'react';
import axios from 'axios'
import './Home.css'
import Avatar from '../../Component/Avatar/Avatar'
import New from '../../Component/New/New'
class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            questionData:[],
            answerData: [],
            answer: '',
        }
    }
        async componentDidMount(){
        const RESPONSE = await fetch(`${process.env.REACT_APP_API_URL}/question`)
        const DATA = await RESPONSE.json()
        console.log('aaaaaa', DATA)
        this.setState({
          questionData:DATA,
            }
        )
    }

    inputAnswer = (e) => {
      this.setState({
        answer: e.target.value
      })
    }

    submitAnswer = (data) => {
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

    likeAnswer = (data) => {
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/likeanswer`,
        data: {
          answerId: data
        }
      })
        window.location.reload();
    }

    likeQuestion = (data) => {
      axios({
        method: 'POST',
        url: `${process.env.REACT_APP_API_URL}/likequestion`,
        data: {
          questionId: data
        }
      })
        window.location.reload();
    }

    renderHome() {
      if (!this.state.questionData) {
        return null
      } else {
        return(
          this.state.questionData.map(data => (
            <div key={data.id} className="home-body">
              <div className="home-layout">
                <div className="home-avatar">
                    <Avatar/> 
                </div>
                <div className="home-content">
                  <div>
                    <h2 className="title">Question</h2>
                    <p className="title-content">{data.question}</p>
                    <button>Like</button>
                    <h2 className="title">Answer</h2>
                    {data.answers.map(data => (
                      <div>
                        <p key={data.id} className="location-content">{data.answer}</p>
                        <label>{data.like}</label>
                        <button onClick={() => this.likeAnswer(data.id)}>like</button>
                      </div>
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
        <New/>
          {this.renderHome()}
        </div>
        );
    }   
}

export default Home;