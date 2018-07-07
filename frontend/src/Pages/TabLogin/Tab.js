import React, { Component } from 'react';
import './Tab.css'
import Login from './Login/Login'
import Signup from './Signup/Signup'
import biru from "../../image/biru.png"

class Tab extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      tab: 1
    }
  }
  
  tabRegister = () => {
    if(this.state.tab === 1) {
      return <Login/>
    } else if (this.state.tab === 2) {
      return <Signup/>
    }
  }
  changeTab = (e) => {
    console.log('e', e)
    this.setState({
      tab: e
    })
  }

  render() { 
    return (  
      <div>
        <img className="login-image" src={biru} alt="img"/>
        <div className="tab"> 
          <div className='tab-label'>
            <div className='tab-login'>
              <button className='tab-button' onClick={() => this.changeTab(1)} >Login</button>
            </div>
            <div className='tab-register'>
              <button className='tab-button' onClick={() => this.changeTab(2)}>Register</button>
            </div>
          </div>
          {this.tabRegister()}
        </div>
      </div>

    )
  }
}

export default Tab;