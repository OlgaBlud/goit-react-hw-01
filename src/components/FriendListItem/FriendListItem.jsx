import clsx from "clsx";
import css from "./FriendListItem.module.css";
function FriendListItem({ avatar, name, isOnline }) {
  return (
    <li className={css.friendListItem}>
      <img className={css.friendAvatar} src={avatar} alt={name} width="88" />
      <p className={css.friendName}>{name}</p>
      <p
        className={clsx(css.friendStatus, isOnline ? css.online : css.offline)}
      >
        {isOnline ? "Online" : "Offline"}
      </p>
    </li>
  );
}
export default FriendListItem;
