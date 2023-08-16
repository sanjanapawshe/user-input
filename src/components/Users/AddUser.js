import React, { useState } from "react";
import Card from "../UI/Card";
import classes from './AddUser.module.css'
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";

const AddUser = (props) => {
    const [enterdUsername, setEnteredUsername] = useState('')
    const [enterdAge, setEnteredAge] = useState('')
    const [error, setError] = useState('')

    const usernameChangeHandler = event => {
        setEnteredUsername(event.target.value)
    }

    const userAgeChangeHandler = event => {
        setEnteredAge(event.target.value)
    }

    const errorHandler = () => {
        setError(null)
    }

    const addUserHandler = event => {
        event.preventDefault()
        if(enterdUsername.trim().length === 0 || enterdAge.trim().length === 0) {
            setError({
                title: 'Invalid User!',
                message: 'Please enter valid name & age (non-empty Value)'
            })
            return
        }
        // + to ensure it's number
        if(+enterdAge < 1) {
            setError({
                title: 'Invalid Age!',
                message: 'Please enter age (>0)'
            })
            return
        }
        console.log(enterdUsername, enterdAge)
        props.onAddUser(enterdUsername, enterdAge)
        setEnteredUsername('')
        setEnteredAge('')
    }
    return (
        <div>
            {error && <ErrorModal title={error.title} message={error.message} onConfirm={errorHandler}/>}
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
