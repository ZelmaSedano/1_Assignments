import React, { useEffect, useState } from 'react';
import DeleteUser from './DeleteUser';
import Events from './Events';

// React Component called Users
const Users = () => {
  //set default for apiresponse to be an empty array
  const [apiResponse, setApiResponse] = useState([]);
  // console.log('apiResponse', apiResponse); <- testing

  // Functions
  // get list of users
  const getUsers = () => {
    // fetch the route data
    fetch('http://localhost:3000/users')
      //turn my response into a JSON
      .then((res) => res.json())
      //set default for apiresponse to be an empty array
      .then((res) => setApiResponse(res));
  };
  // add a user to list
  const addUser = (newUser) => {
    // fetch the route data
    fetch('http://localhost:3000/users/add', {
      /* Add user on server side */
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      // turn the JSON into a string so it can be printed?
      body: JSON.stringify(newUser),
    }).then(() => getUsers());
  };
  // delete a user from list
  const deleteUser = (userId) => {
    fetch(`http://localhost:3000/users/${userId}`, {
      /* Delete user on server side */
      method: 'DELETE',
    }).then(() => getUsers());
  };
  // useEffect tells React that your component needs to do something after rendering
  useEffect(() => {
    getUsers(); // useEffect will run getUsers() every time this component loads, as opposed to just the first time it is rendered. Empty array added witll stop inifinite runs
  }, []);

  //adding mock users
  // const marlin = { name: "Marlin", email: "marlin@gmail.com", id:"1" };
  // const nemo = { name: "Nemo", email: "nemo@gmail.com", id: "2" };
  // const dory = { name: "Dory", email: "dory@gmail.com" , id: "3"};

  //use setState to create uers and setUsers
  // const [users, setUsers] = useState([]);

  //use setstate to name field
  const [name, setName] = useState('');

  //use setstate to email field
  const [email, setEmail] = useState('');

  //use settate to user id field
  const [id, setId] = useState('');

  //add onSubmit function
  const onSubmit = (event) => {
    event.preventDefault(); // Prevent default submission so that it stops it from refreshing and sending data
    const newUser = { name, email, id };
    addUser(newUser);
  };

  //call getUsers after the onSubmit

  return (
    <>
      <section className='user-management'>
        <h2>User Management</h2>

        <ul id='users-list'>
          {/* display all existing Users here, iterating through users with map,  transforming each user into a <li></li> and add index as the key */}
          {apiResponse.map((users, index) => {
            return (
              <li key={index}>
                User: {users.name}, Email: {users.email}, User ID: {users.id}
              </li>
            );
          })}
          {/* {users.map((user, i) => <li key={i}>User:   {user.name}, Email: {user.email}, User ID: {user.id}</li>)}
           */}
        </ul>

        <div>
          <h3>Add User</h3>
          <form id='add-user' action='#' onSubmit={onSubmit}>
            <fieldset>
              {/* user name field */}
              <div>
                <label>Name</label>
                {/* with value property, every time the user ty[es a name in name field, the name state is updated */}
                <input
                  type='text'
                  id='add-user-name'
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              {/* email field */}
              <div>
                <label>Email</label>
                <input
                  type='email'
                  id='add-user-email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
              {/* id field */}
              <div>
                <label>User ID</label>
                <input
                  type='number'
                  id='add-user-id'
                  value={id}
                  onChange={(e) => setId(Number(e.target.value))}
                />
              </div>
            </fieldset>
            <input type='submit' value='Add' id='addUser' />
            {/* reset button not working
                  <button onClick="document.getElementById('addUser').value='Add'">Reset</button> */}
          </form>
          {/* why spread operator? */}
          <DeleteUser {...{ deleteUser }} />
        </div>
      </section>
    </>
  );
};

export default Users;
