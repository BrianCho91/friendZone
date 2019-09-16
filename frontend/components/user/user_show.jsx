import React from 'react';
import PostsFormContainer from '../posts/posts_form_container';
import PostsIndexContainer from '../posts/posts_index_container';
import { Link } from 'react-router-dom';
import { formatDateAbout } from '../../util/date_util';

export default class UserShow extends React.Component {
  constructor(props) {
    super(props)
  }

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

    if (Object.keys(this.props.user).length === 0) {
      return null;
    }
    return(
      <div className="user-page">
        <div className="user-content">
          <div className="cover-photo">
            <img src={this.props.user.coverPicUrl} />
            <p className="profile-name">{this.props.user.firstName} {this.props.user.lastName}</p>
            {coverButtons}
          </div>
          <div className="profile-pic">
            <img src={this.props.user.profilePicUrl} />
          </div>
          <div className="profile-nav">
            <ul>
              <li className="user-nav-first" id="current-tab">Timeline</li>
              <Link to={`/users/${this.props.user.id}/about`}><li>About</li></Link>
              <Link to={`/users/${this.props.user.id}/friends`}><li>Friends</li></Link>
              <Link to={`/users/${this.props.user.id}/photos`}><li>Photos</li></Link>
            </ul>
          </div>
          <section className="profile-content">
            <div className="pc-left">
              <div className="pc-left-about">
                <section>
                  <i className="fas fa-info-circle"></i>
                  Intro
                </section>
                <section className="about-bio">
                  {this.props.user.aboutMe}
                </section>
                <div className="intro-about">
                  <section><i className="fas fa-home"></i>Lives in {this.props.user.location}</section>
                  <section><i className="fas fa-map-marker-alt"></i>From {this.props.user.hometown}</section>
                  <section><i className="far fa-clock"></i>Joined {formatDateAbout(this.props.user.createdAt)}</section>
                </div>
              </div>
              <div className="pc-left-photos">
                <section>
                  <i className="fas fa-image"></i>
                  Photos
                </section>
              </div>
              <div className="pc-left-friends">
                <section>
                  <i className="fas fa-users"></i>
                  Friends
                </section>
              </div>
            </div>
            <div className="pc-right">
              <div className="profile-post-form">
                <PostsFormContainer />
              </div>
              <div className="profile-posts">
                <PostsIndexContainer />
              </div>
            </div>

          </section>

        </div>
      </div>
    )
  }
}

UserShow.defaultProps = {
  user: {}
};