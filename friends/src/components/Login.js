import React from 'react';
import { connect } from 'react-redux';

import { login } from '../actions';

class Login extends React.Component {
  constructor(props) {
    super(props);
    
    this.state = {
      username: '',
      password: ''
    }
  }

  handleText = e => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleLogin = e => {
    e.preventDefault();
    this.props.login(this.state)
      .then(() => this.props.history.push('/protectedFriendsList'))
      .catch(err => console.log(err));
  }

  render() {
    return (
      <div className='login'>
        <form onSubmit={this.handleLogin}>
          <input type='text' name='username' placeholder='username' />
          <input type='text' name='password' placeholder='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    isLoggingIn: state.isLoggingIn,
    loginError: state.loginError
  }
};

export default connect(mapStateToProps, { login })(Login);