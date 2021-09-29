import FriendListItem from '../components/FriendListItem';
function FriendList({ friends }) {
  return (
    <ul>
      {friends.map(({ id, avatar, name, isOnline }) => (
        <FriendListItem key={id} avatar={avatar} name={name} isOnline={isOnline} />
      ))}
    </ul>
  );
}

export default FriendList;
