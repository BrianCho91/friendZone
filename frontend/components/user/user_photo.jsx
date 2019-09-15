import React from 'react';
import { Link } from 'react-router-dom';

export default class UserPhoto extends React.Component {

  componentDidMount() {
    this.props.fetchAllUsers();
  }

  render() {
    const coverButtons = (this.props.user === this.props.currentUser) ? (
      <div>
        <Link to={`/users/${this.props.currentUser.id}/edit`}><button className="edit-prof-button"><i className="fas fa-user-edit"></i> Update Profile</button></Link>
      </div>
    ) : (
        <div>
          <button className="friend-button"><i className="fas fa-user-plus"></i>Add Friend</button>
          <button className="message-button"><i className="far fa-envelope"></i>Message</button>
        </div>
      )
    return (
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">
            <p className="profile-name">{this.props.user.firstName} {this.props.user.lastName}</p>
            {coverButtons}
          </div>
          <div className="profile-pic">

          </div>
          <div className="profile-nav">
            <ul>
              <Link to={`/users/${this.props.user.id}`}><li className="user-nav-first">Timeline</li></Link>
              <Link to={`/users/${this.props.user.id}/about`}><li>About</li></Link>
              <Link to={`/users/${this.props.user.id}/friends`}><li>Friends</li></Link>
              <li id="current-tab">Photos</li>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-photo">
              <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/y-/r/oa3eD-HhoPn.png" />Photos</p>
              <div className="photo-bottom">
                <div className="photo-left"></div>
                <div className="photo-right"></div>
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}

UserPhoto.defaultProps = {
  user: {}
};