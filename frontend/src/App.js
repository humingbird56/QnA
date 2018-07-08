import React, { Component } from 'react';
import { Provider } from 'react-redux'

import store from './Store/Index'
import RouteList from './Routes'

export default class App extends Component{
  render() {
    return (
      <Provider store={store}>
        <RouteList/>
      </Provider>
    )
  }
}