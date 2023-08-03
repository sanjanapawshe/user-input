import React from 'react';
import AddUser from './components/Users/AddUser';
import UsersList from './components/Users/UsersList';
import { useState } from 'react';

function App() {
  const [userList, setUserList] = useState([])

  const addUserHandler = (uName, uAge) => {
    setUserList((prevUsersList) => {
      return [...prevUsersList, {name: uName, age: uAge}]
    })
  }

  return (
    <div>
      <AddUser onAddUser={addUserHandler}/>
      
      <UsersList users={userList}/>
    </div>
  );
}

export default App;
