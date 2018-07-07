import React, { Component } from 'react';
import './Home.css'
import Avatar from './Avatar'

class Home extends Component {
    constructor(props){
        super(props)
        this.state = {
            data:[]
        }
    }
        async componentDidMount(){
        const RESPONSE = await fetch(`${process.env.REACT_APP_API_URL}/question`)
        // const DATA = await RESPONSE.json()
        const DATA = await RESPONSE.json()
        console.log(DATA)
        this.setState({
        data:DATA
            }
        )
    }
render() {
    return (
        <div className="container home">
            {this.state.data.map(data => (
            <div key={data._id} className="home-body">
                <div className="home-layout">
                    <div className="home-avatar">
                        <Avatar/> 
                    </div>
                    <div className="home-content">
                        <div>
                            <h2 className="title">Question</h2>
                            <p className="title-content">{data.question}</p>
                            <h2 className="title">Answer</h2>
                            <p className="location-content">{data.answer}</p>
                        </div>                        
                    </div>
                </div>
            </div>
            ))}
        </div>
        );
    }   
}

export default Home;