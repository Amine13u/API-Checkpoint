import React from "react";

const UserCard = ({ user }) => {
  return (
    <div className="user-card">
      <h1>{user.name}</h1>
      <hr />
      <br />
      <h3>
        <span>Email : </span>
        {user.email}
      </h3>
      <h3>
        <span>Phone : </span>
        {user.phone}
      </h3>
      <h3>
        <span>Web Site : </span>
        {user.website}
      </h3>
    </div>
  );
};

export default UserCard;
