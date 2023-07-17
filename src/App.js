import React, { useState } from "react";
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
    <div className="App">
      <UserForm onAddUser={addUserHandler} />
      <UserList users={usersList} />
    </div>
  );
}

export default App;
