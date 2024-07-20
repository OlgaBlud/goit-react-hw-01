// import { useState } from "react";
// import reactLogo from "./assets/react.svg";
// import viteLogo from "/vite.svg";
import "./App.css";

import Profile from "./Profile/Profile";

import TransactionHistory from "./TransactionHistory/TransactionHistory";
import userData from "../data/userData.json";
import friends from "../data/friends.json";
import transactions from "../data/transactions.json";
import FriendList from "./FriendList/FriendList";

function App() {
  return (
    <>
      <div>
        <Profile
          name={userData.username}
          tag={userData.tag}
          location={userData.location}
          image={userData.avatar}
          stats={userData.stats}
        />
      </div>
      <div>
        <FriendList friends={friends} />
      </div>
      <div>
        <TransactionHistory transactions={transactions} />
      </div>
    </>
  );
}

export default App;
