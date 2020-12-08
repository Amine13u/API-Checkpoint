import React, { useState, useEffect } from "react";
import axios from "axios";

import UserCard from "./UserCard";

const UserList = () => {
  const [listOfUser, setListOfUser] = useState([]);
  console.log(listOfUser);
  useEffect(() => {
    axios
      .get("https://jsonplaceholder.typicode.com/users")
      .then((response) => setListOfUser(response.data))
      .catch((error) => console.log(error));
  }, []);

  return (
    <div className="user-list">
      {listOfUser.map((user) => (
        <UserCard user={user} key={user.id} />
      ))}
    </div>
  );
};

export default UserList;
