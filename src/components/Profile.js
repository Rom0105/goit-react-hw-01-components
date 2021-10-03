import PropTypes from 'prop-types';
import styles from '../css/Profile.module.css';
function Profile({ name, tag, location, avatar, stats }) {
  return (
    <div className={styles.profile}>
      <div className={styles.description}>
        <img className={styles.profileImg} src={avatar} alt="Аватар пользователя" width="150" />
        <p>{name}</p>
        <p>@{tag}</p>
        <p>{location}</p>
      </div>

      <ul className={styles.stats}>
        <li className={styles.items}>
          <span className={styles.label}>Followers</span>
          <span>{stats.followers}</span>
        </li>
        <li className={styles.items}>
          <span className={styles.label}>Views</span>
          <span>{stats.views}</span>
        </li>
        <li className={styles.items}>
          <span className={styles.label}>Likes</span>
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
