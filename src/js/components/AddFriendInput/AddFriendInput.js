import './AddFriendInput.scss';

import React, { Component, PropTypes } from 'react';
import {addFriend} from '../../actions/FriendsActions';
import { connect } from 'react-redux';

class AddFriendInput extends Component {

  static propTypes = {
    addFriend: PropTypes.func.isRequired,
    name: PropTypes.string,
    dispatch: PropTypes.func
  };

  constructor(props, context) {
    super(props, context);

    this.state = {
      name: this.props.name || ''
    };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({ name: e.target.value });
  }

  handleSubmit(e) {
    const name = e.target.value.trim();
    if (e.which === 13) {
      this.props.dispatch(addFriend(name));
      this.setState({ name: '' });
    }
  }

  render() {
    return (
      <input
        type="text"
        autoFocus="true"
        className="form-control addFriendInput"
        placeholder="Type the name of a friend"
        value={this.state.name}
        onChange={this.handleChange}
        onKeyDown={this.handleSubmit} />
    );
  }
}

export default connect()(AddFriendInput);
