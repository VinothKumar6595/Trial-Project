import React, { useState, Fragment } from "react";
import "./App.css";
import UserForm from "./Components/Users/UserForm";
import UserList from "./Components/Users/UserList";

function App() {
  const [usersList, setUsersList] = useState([]);
  const addUserHandler = (userData) => {
    console.log(userData);
    setUsersList((prevUsersList) => {
      return [...prevUsersList, userData];
    });
  };

  return (
    <Fragment>
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </Fragment>
  );
}

export default App;
