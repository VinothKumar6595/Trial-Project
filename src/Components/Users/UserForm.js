import React, { useState, useRef } from "react";
import classes from "./UserForm.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../UI/Wrapper";

const UserForm = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const collegeInputRef = useRef();

  const [error, setError] = useState();

  const userSubmitandler = (event) => {
    event.preventDefault();
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;
    const enteredCollegeName = collegeInputRef.current.value;
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
      college: enteredCollegeName,
      id: Math.random().toString(),
    };
    props.onAddUser(userData);
    nameInputRef.current.value = "";
    ageInputRef.current.value = "";
    collegeInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
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
          <input id="username" type="text" ref={nameInputRef} />
        </div>
        <div>
          <label htmlFor="age">Age</label>
          <input id="age" type="number" ref={ageInputRef} />
        </div>
        <div>
          <label htmlFor="college">College Name</label>
          <input id="college" type="text" ref={collegeInputRef} />
        </div>
        <div>
          <Button type="submit" onClick={userSubmitandler}>
            Add User
          </Button>
        </div>
      </form>
    </Wrapper>
  );
};

export default UserForm;
