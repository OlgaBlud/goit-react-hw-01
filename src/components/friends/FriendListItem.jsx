// avatar - посилання на аватар
// name - ім'я друга
// isOnline - буль, що сигналізує про стан друга: в мережі або ні.

function FriendListItem({ avatar, name, isOnline }) {
  return (
    <div>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </div>
  );
}
export default FriendListItem;
