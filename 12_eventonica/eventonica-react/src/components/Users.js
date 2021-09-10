import React, { useEffect, useState } from 'react';
import DeleteUser from './DeleteUser';
import Events from './Events';
const Users = () => {
  const [apiResponse, setApiResponse] = useState([]);

  console.log('apiResponse', apiResponse);

  const getUsers = () => {
    fetch('http://localhost:3000/users')
      //turn my response into a JSON
      .then((res) => res.json())
      //set default for apiresponse to be an empty array
      .then((res) => setApiResponse(res));
  };

  const addUser = (newUser) => {
    fetch('http://localhost:3000/users/add', {
      /*Add user on server side */
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify(newUser),
    }).then(() => getUsers());
  };

  // const deleteUser = (deleteId) => {
  //   fetch(`http://localhost:3000/users/delete/${deleteId}`, {
  //     /*Add user on server side */
  //     mode: 'no-cors',
  //     method: 'POST',
  //     headers: { 'Content-Type': 'application/json' },
  //   }).then(() => getUsers());
  // };

  const deleteUser = (userId) => {
    fetch(`/users/${userId}`, {
      /*Add user on server side */
      method: 'DELETE',
    }).then(getUsers);
  };

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

  // console.log(users);
  //function for when user is deleted, we want the user object with that ID to be removed from the users list, filter creates a new array with all elements that pass the test implemented by the provided function.
  //creating new variable of deleteUsers and setting variable to deleteId
  // const deleteUser = (deleteId) => {
  //     //declaring new variable newUsers, creating a new list and checks if the userid does not equal to deleteid, it will keep users in the list. If userid does equal delteId, we will not keep it in the list.
  //     function test (user){
  //         if(user.id !== deleteId){
  //             return true;
  //         } else{
  //             return false;
  //         }
  //     }
  //     const newUsers = users.filter(test);
  //     //setting state to newUsers, old list of users will be replaced by new list of users
  //     setUsers(newUsers)
  // };

  return (
    <>
      <section className='user-management'>
        <h2>User Management</h2>

        <ul id='users-list'>
          {/* display all existing Users here, iterating through users with map,  transforming each user into a <li></li> and add u as the key */}
          {apiResponse.map((users, i) => {
            return (
              <li key={i}>
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
          <DeleteUser {...{ deleteUser }} />
        </div>
      </section>
    </>
  );
};

export default Users;
