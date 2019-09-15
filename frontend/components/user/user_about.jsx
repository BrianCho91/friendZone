import React from 'react';
import { Link } from 'react-router-dom';
import Tabs from './about_tab';

export default class UserAbout extends React.Component {
  componentDidMount() {
    this.props.fetchAllUsers();
  }
  render() {
    console.log(this.props.user);
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
    const aboutPane = [
      {title: 'Overview', content: this.props.user},
      {title: 'Work and Education', content: this.props.user},
      {title: 'Places They Lived', content: this.props.user},
      {title: 'Contact and Basic Info', content: this.props.user}
    ]
    return(
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
              <li id="current-tab">About</li>
              <Link to={`/users/${this.props.user.id}/friends`}><li>Friends</li></Link>
              <Link to={`/users/${this.props.user.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="user-about">
              <p><img src="https://static.xx.fbcdn.net/rsrc.php/v3/yZ/r/dp8LigpKyOw.png" />About</p>
              <div className="about-bottom">
                <Tabs aboutPane={aboutPane} />
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}

UserAbout.defaultProps = {
  user: {}
};