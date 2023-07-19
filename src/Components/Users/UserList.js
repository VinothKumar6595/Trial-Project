import React from "react";
import classes from "./UserList.module.css";

const UserList = (props) => {
  return (
    <div className={classes.user}>
      <ul>
        {props.users.map((user) => (
          <li key={user.id}>
            {user.name} ({user.age} years Old) studied in {user.college}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default UserList;
