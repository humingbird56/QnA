//@flow
import React, { Component } from 'react';
import Helpers from '../../Helpers/index'

type State = {
  dropdownMenu: boolean
}

type Props = {
}

class Navbar extends Component <State, Props> {
  constructor(props) {
    super(props);
    this.state = { 
      dropdownMenu : false
    }
  }

  logout = () => {
    Helpers.deleteToken()
    this.props.history.push('/tabs')
  }

  dropdown = () => {
    if (this.state.dropdownMenu === false){
      return null
    } else if (this.state.dropdownMenu === true){
      return(
        <div>
          <button>Home</button>
          <button onClick={this.logout}>Logout</button>
        </div>
      )
    }
  }

  toggle = () => {
    this.setState({ 
      dropdownMenu: !this.state.dropdownMenu
    });
  }

  render() { 
    console.log(this.state.dropdownMenu)
    return ( 
      <div>
        {/* <select>
          <option>Home</option>
          <option onClick={this.logout}>Logout</option>
        </select> */}
        <button onClick={this.toggle}>Menu</button>
        {this.dropdown()}
      </div>
    );
  }
}

export default Navbar;