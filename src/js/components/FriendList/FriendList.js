import './FriendList.scss';

import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import FriendListItem from '../FriendListItem/FriendListItem';

class FriendList extends Component {

  static propTypes = {
    friends: PropTypes.array.isRequired,
    actions: PropTypes.object.isRequired
  };

  renderList() {
    return this.props.friends.map((friend) =>
      (
        <FriendListItem
          key={friend.id}
          id={friend.id}
          name={friend.name}
          starred={friend.starred} />
      )
    );
  }

  render () {
    return (
      <ul className="friendList">
        {this.renderList()}
      </ul>
    );
  }
}
function mapStateToProps(state) {
  return {
    friends: state.friendList.friendsById
  };
}

export default connect(mapStateToProps)(FriendList);
