import React from 'react';
import { connect } from 'react-redux';

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

  render() {
    return (
      <div className='login'>
        <form>
          <input type='text' name='username' placeholder='username' />
          <input type='text' name='password' placeholder='password' />
          <input type='submit' />
        </form>
      </div>
    )
  }
}

export default Login;