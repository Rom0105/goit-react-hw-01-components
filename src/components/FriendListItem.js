import PropTypes from 'prop-types';
import '../css/FriendListItem.css';
function Friends({ avatar, name, isOnline }) {
  return (
    <li className="item">
      <span className={isOnline ? 'online' : 'offline'}>{isOnline}</span>
      <img className="avatar" src={avatar} alt={name} width="48" />
      <p className="name">{name}</p>
    </li>
  );
}

export default Friends;

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
