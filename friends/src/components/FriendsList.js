import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';

import { getData } from '../actions';

class FriendsList extends React.Component {
  componentDidMount() {
    this.props.getData();
  }

  render() {
    return (
      <div>
        <ul>
          {this.props.friendsList.map((friend, index) => {
            return (
              <li key={index}>{friend.name}</li>
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

export default withRouter(connect(mapStateToProps, { getData })(FriendsList))