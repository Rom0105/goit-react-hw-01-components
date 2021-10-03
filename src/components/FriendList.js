import PropTypes from 'prop-types';
import FriendListItem from '../components/FriendListItem';
import styles from '../css/FriendList.module.css';
function FriendList({ friends }) {
  return (
    <ul className={styles.friendList}>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

FriendList.protoTypes = {
  friends: PropTypes.arrayOf(PropTypes.shape({ id: PropTypes.number.isRequired })).isRequired,
};

export default FriendList;
