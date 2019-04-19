import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class FriendsList extends React.Component {
  render() {
    return (
      <div>
        <ul>
          {this.props.friendsList.map(friend => {
            return (
              <li>{friend.name}</li>
            )
          })}
        </ul>
      </div>
    )
  }
}

const mapStateToProps = state => {
  return {
    friendsList: state.friendsList,
    isFetching: state.isFetching
  }
}

export default withRouter(connect(mapStateToProps, {  })(FriendsList))