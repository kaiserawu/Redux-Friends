import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import './App.css';

import Login from './components/Login';
import FriendsList from './components/FriendsList';

class App extends Component {
  render() {
    return (
      <Router >
        <div className="App">
          <nav>
            <Link to='/login'>Login</Link>
            <Link to='/protectedFriendsList'>Friends List</Link>
          </nav>
          <Route path='/login' component={Login} />
          <Route exact path='/protectedFriendsList' component={FriendsList} />
        </div>
      </Router>
    );
  }
}

export default App;
