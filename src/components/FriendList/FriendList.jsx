import FriendListItem from "../FriendListItem/FriendListItem";
import css from "./FriendList.module.css";
function FriendList({ friends }) {
  return (
    <ul className={css.friendList}>
      {friends.map((friend) => {
        return (
          <li key={friend.id} className={css.friendListItem}>
            <FriendListItem
              avatar={friend.avatar}
              name={friend.name}
              isOnline={friend.isOnline}
            />
          </li>
        );
      })}
    </ul>
  );
}
export default FriendList;
