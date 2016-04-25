import './FriendListItem.scss';

import React, { Component, PropTypes } from 'react';
import classnames from 'classnames';
import { RaisedButton } from 'material-ui';

export default class FriendListItem extends Component {

  static propTypes = {
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired,
    starred: PropTypes.bool,
    starFriend: PropTypes.func.isRequired,
    deleteFriend: PropTypes.func.isRequired
  };

  render () {
    return (
      <li className="friendListItem">
        <div className="friendInfos">
          <div><span>{this.props.name}</span></div>
        <div><small>xx friends in common</small></div>
        </div>
        <div className="friendActions">
          <RaisedButton label="Starred" secondary={true} onClick={() => this.props.starFriend(this.props.id)} />          
          <RaisedButton label="Delete" secondary={true} onClick={() => this.props.deleteFriend(this.props.id)} />          
        </div>
      </li>
    );
  }
}
