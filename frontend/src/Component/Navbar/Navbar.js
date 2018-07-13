//@flow

import React, { Component } from 'react';

class Navbar extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      <div>
        <select>
          <option>Home</option>
          <option>Logout</option>
        </select>
      </div>
    );
  }
}

export default Navbar;