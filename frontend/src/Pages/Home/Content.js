// import React, { Component } from 'react';
// import './Home.css'
// const API_URL="http://localhost:4000/notes"

// class Content extends Component {
//     constructor(props){
//     super(props)
//     this.state = {
//     data:[]
//     }
// }

//     async componentWillMount(){
//     const RESPONSE = await fetch(API_URL)
//     const DATA = await RESPONSE.json()
//     console.log(DATA)
//     this.setState({
//     data:DATA
//         }
//     )
// }

// render() {
//     return (
//     <div className="container content">
//         {this.state.data.map(data => (
//             <div key={data._id}>
//             <h2 className="title">Title</h2>
//             <p className="title-content">{data.title}</p>
//             <h2 className="title">Locations</h2>
//             <p className="location-content">{data.location}</p>
//             <h2 className="title">Message</h2>
//             <p className="message-content">{data.message}</p>
//             </div>
//         ))}
//     </div>
//     )   ;
//     }
// }

export default Content;