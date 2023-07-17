import React, { useState } from "react";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const UserForm = (props) => {
  const [enteredName, setEnteredName] = useState("");

  const [enteredAge, setEnteredAge] = useState("");
  const [error, setError] = useState();
  const nameChangeHandler = (event) => {
    setEnteredName(event.target.value);
  };
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };
  const userSubmitandler = (event) => {
    event.preventDefault();
    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "please enter a valid name and age (non-empty values)",
      });
      return;
    }
    if (enteredAge < 1) {
      setError({
        title: "Invalid Age",
        message: "Please enter a valid Age (>0)",
      });
      return;
    }
    const userData = {
      name: enteredName,
      age: enteredAge,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
    setEnteredName("");
    setEnteredAge("");
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <form className={classes.form}>
        <div>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredName}
            onChange={nameChangeHandler}
          />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
        </div>
        <div>
          <Button type="submit" onClick={userSubmitandler}>
            Add User
          </Button>
        </div>
      </form>
    </div>
  );
};

export default UserForm;
