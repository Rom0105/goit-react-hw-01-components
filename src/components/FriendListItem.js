import PropTypes from 'prop-types';
import s from '../css/FriendListItem.module.css';
function Friends({ avatar, name, isOnline }) {
  return (
    <li className={s.item}>
      <span className={s.label} style={{ backgroundColor: isOnline ? '#4caf50' : '#f44336' }}>
        {isOnline}
      </span>
      <img className={s.img} src={avatar} alt={name} width="48" />
      <p className={s.text}>{name}</p>
    </li>
  );
}

export default Friends;

Friends.propTypes = {
  avatar: PropTypes.string,
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool,
};
