// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";
import FriendList from "./FriendList/FriendList";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import Profile from "./fvxcrofile/Profile";

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
      <div>
        <h2>3 task</h2>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
}

export default App;
