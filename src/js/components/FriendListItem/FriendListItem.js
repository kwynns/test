import './FriendListItem.scss';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { connect } from 'react-redux';
import {deleteFriend, starFriend} from '../../actions/FriendsActions';
class FriendListItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired,
    dispatch: PropTypes.func
  };

  render () {
    return (
      <li className="friendListItem">
        <div className="friendInfos">
          <div><span>{this.props.name}</span></div>
        <div><small>xx friends in common</small></div>
        </div>
        <div className="friendActions">
          <button className="btn btn-default btnAction" onClick={() => this.props.dispatch(starFriend(this.props.id))}>
            <i className={classnames('fa', { 'fa-star': this.props.starred }, { 'fa-star-o': !this.props.starred })} />
          </button>
          <button className="btn btn-default btnAction" onClick={() => this.props.dispatch(deleteFriend(this.props.id))}>
            <i className="fa fa-trash" />
          </button>
        </div>
      </li>
    );
  }
}

export default connect()(FriendListItem);
