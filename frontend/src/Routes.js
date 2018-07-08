import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import Tab from './Pages/TabLogin/Tab';
import Home from './Pages/Home/Home';
import Profile from './Pages/Profile/Profile';
import New from './Pages/New/New';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route
    {...rest}
    render={(props) => (
      localStorage.getItem('token') ? (
        <Component {...props} />
      ) : (
        <Redirect
          to={{
            pathname: "/",
            state: { from: props.location },
          }}
        />
      ))
    }
  />
);

class RouteList extends Component {
  render() {
    return (
      <div className="mainContainer">
        <Router>
          <div>
            <Route exact path="/" component={Tab} />
            <PrivateRoute exact path="/home" component={ Home } />
            <PrivateRoute path='/profile' component={Profile} />
            <PrivateRoute path='/new-learning' component={New} />
          </div>
        </Router>
      </div>
    )
  }
}

export default RouteList;