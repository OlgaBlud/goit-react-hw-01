import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <FriendListItem
            key={friend.id}
            avatar={friend.avatar}
            name={friend.name}
            isOnline={friend.isOnline}
          />
        );
      })}
    </ul>
  );
}
export default FriendList;
