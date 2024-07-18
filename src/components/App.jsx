// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import FriendList from "./friends/FriendList";
import Profile from "./profile/Profile";
const userData = {
  username: "Jacques Gluke",
  tag: "jgluke",
  location: "Ocho Rios, Jamaica",
  avatar: "https://cdn-icons-png.flaticon.com/512/2922/2922506.png",
  stats: {
    followers: 5603,
    views: 4827,
    likes: 1308,
  },
};
// ++++++++++++++++++++++++++++++++++++
const friends = [
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998592.png",
    name: "Mango",
    isOnline: true,
    id: 1812,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/616/616438.png",
    name: "Kiwi",
    isOnline: false,
    id: 1137,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1623/1623681.png",
    name: "Ajax",
    isOnline: true,
    id: 1213,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/2977/2977285.png",
    name: "Jay",
    isOnline: true,
    id: 1714,
  },
  {
    avatar: "https://cdn-icons-png.flaticon.com/512/1998/1998749.png",
    name: "Poly",
    isOnline: false,
    id: 1284,
  },
];
// ++++++++++++++++++++++++++++++++++++
function App() {
  return (
    <>
      <div>
        <h2>First task</h2>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <h2>2 task</h2>
        <FriendList friends={friends} />
      </div>
    </>
  );
}

export default App;
