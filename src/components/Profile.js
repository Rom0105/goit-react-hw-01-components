import PropTypes from 'prop-types';
import '../css/Profile.css';
function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className="profile">
      <div className="description">
        <img src={avatar} alt="Аватар пользователя" width="150" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className="stats">
        <li className="items">
          <span className="label">Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className="items">
          <span className="label">Views</span>
          <span>{stats.views}</span>
        </li>
        <li className="items">
          <span className="label">Likes</span>
          <span>{stats.likes}</span>
        </li>
      </ul>
    </div>
  );
}

export default Profile;

Profile.propTypes = {
  name: PropTypes.string,
  tag: PropTypes.string,
  location: PropTypes.string,
  avatar: PropTypes.string,
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
