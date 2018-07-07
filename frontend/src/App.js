import React, { Component } from 'react';

import { Route, HashRouter, Switch } from "react-router-dom";

import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import New from './Pages/New/New';
import Tab from './Pages/TabLogin/Tab'

class App extends Component {
  
  render() {
    const showSidebar = window.location.hash.substr(2) !== ''    
    return (
      <HashRouter>
        <div>
        <Switch>
          <Route path='/tab' exact component={Tab} />
          <Route path='/'  component={Home} />
          <Route path='/profile' component={Profile} />
          <Route path='/new-learning' component={New} />
        </Switch>
        </div>
      </HashRouter>
    );
  }
}

export default App;
