function FriendListItem({ avatar, name, isOnline }) {
  return (
    <>
      <img src={avatar} alt="Avatar" width="48" />
      <p>{name}</p>
      <p>{isOnline ? "Online" : "Offline"}</p>
    </>
  );
}
export default FriendListItem;
