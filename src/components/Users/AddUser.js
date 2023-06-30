import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";

const AddUser = (props) => {
    const [enterdUsername, setEnteredUsername] = useState('')
    const [enterdAge, setEnteredAge] = useState('')

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const userAgeChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const addUserHandler = event => {
        event.preventDefault()
        if(enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
            return
        }
        // + to ensure it's number
        if(+enterdAge < 1) {
            return
        }
        console.log(enterdUsername, enterdAge)
        setEnteredUsername('')
        setEnteredAge('')
    }
    return (
        <div>
            <Card className={classes.input}>
                <form onSubmit={addUserHandler}>
                    <label htmlFor="username">Username</label>
                    <input id="username" type="text" value={enterdUsername} onChange={usernameChangeHandler}></input>
                    <label htmlFor="age">Age (years)</label>
                    <input id="age" type="number" value={enterdAge} onChange={userAgeChangeHandler}></input>
                    <Button type="submit">Add User</Button>
                </form>
            </Card>
        </div>
    );
};

export default AddUser;
