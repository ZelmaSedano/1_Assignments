import React, { useState } from 'react';
import DeleteUser from './DeleteUser';

function Users() {
  // 1) iterate through user list & display their name & email in the list? have a unique kkey for each list item
  const marlin = { name: 'Marlin', email: 'marlin@gmail.com', id: '1' };
  const nemo = { name: 'Nemo', email: 'nemo@gmail.com', id: '2' };
  const dory = { name: 'Dory', email: 'dory@gmail.com', id: '3' };

  // States
  const [users, setUsers] = useState([marlin, nemo, dory]);
  // iterate over the list of users and create an <li> for each one
  const [name, setName] = useState('');
  const [id, setId] = useState('');
  const [email, setEmail] = useState('');

  // we need to tell the browser how to update the state for each input
  //

  // when we click submit, we pulling the values and setting them as the new state values
  const onSubmit = (e) => {
    e.preventDefault();
    const newUser = { id, name, email };
    setUsers([...users, newUser]);
  };

  // 'give me every user who is not the one I want to delete, which returns an array w/ every user you want and the one you didn't want removed'
  const deleteUser = (deleteId) => {
    // deleteId.preventDefault();
    const newUsers = users.filter((i) => i.id !== deleteId);
    setUsers(newUsers);
  };

  // 2) when the user clicks 'submit', it should:
  // create a new user w/ id, email, and name
  // add that new user to the list of users
  return (
    <section className='user-management'>
      <h2>User Management</h2>

      {/* How to map & print info from above (not props, but similar) */}
      <ul id='users-list'>
        {users.map((item, index) => {
          // can only be one item, remember to add key={index}
          return (
            <li key={index}>
              {item.name}, {item.email}
            </li>
          );
        })}
        <li>...</li>
      </ul>

      <div>
        <h3>Add User</h3>
        <form id='add-user' action='#'>
          <fieldset>
            {/* add an onChange event handler to each input*/}
            <label>Name</label>
            <input
              type='text'
              id='add-user-name'
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>ID</label>
            <input
              type='text'
              value={id}
              id='add-user-id'
              onChange={(e) => setId(e.target.value)}
            />
          </fieldset>
          <fieldset>
            <label>Email</label>
            <input
              type='text'
              value={email}
              id='add-user-email'
              onChange={(e) => setEmail(e.target.value)}
            />
          </fieldset>
          {/* Add more form fields here */}
          {/* add onSubmit to button */}
          <input type='submit' value='Add' onClick={onSubmit} />
        </form>
      </div>
      {/* deleting user */}
      <DeleteUser deleteUser={deleteUser} />
    </section>
  );
}

export default Users;
