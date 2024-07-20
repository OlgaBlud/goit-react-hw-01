import css from "./Profile.module.css";
function Profile({ name, tag, location, image, stats }) {
  return (
    <>
      <h2 className="taskTitle">Profile</h2>
      <div className={css.profileWrap}>
        <div className={css.profileMainInfoWrap}>
          <img className={css.profileIcon} src={image} alt="User avatar" />
          <p className={css.userName}>{name}</p>
          <p className={css.userDescription}>@{tag}</p>
          <p className={css.userDescription}>{location}</p>
        </div>
        <ul className={css.profileList}>
          <li className={css.profileListItem}>
            <span className={css.profileIndicators}>Followers</span>
            <br />
            <span className={css.profileStatistic}>{stats.followers}</span>
          </li>
          <li className={css.profileListItem}>
            <span className={css.profileIndicators}>Views</span>
            <br />
            <span className={css.profileStatistic}>{stats.views}</span>
          </li>
          <li className={css.profileListItem}>
            <span className={css.profileIndicators}>Likes</span>
            <br />
            <span className={css.profileStatistic}>{stats.likes}</span>
          </li>
        </ul>
      </div>
    </>
  );
}
export default Profile;
