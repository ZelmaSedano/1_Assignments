import React, { useState } from 'react';
// import Users  from "./Users";

function DeleteUser({ deleteUser }) {
  //add state to store what deleteID the user has typed and change delete user
  const [deleteId, setDeleteId] = useState(0);

  //add obSubmit function
  const onSubmit = (event) => {
    event.preventDefault();
    //callback function to delete user ids
    deleteUser(deleteId);
    setDeleteId(0);
  };
  return (
    <>
      <div>
        <h3>Delete User</h3>
        <form id='delete-user' action='#' onSubmit={onSubmit}>
          <fieldset>
            <label>User ID</label>
            <input
              type='text'
              id='delete-user-id'
              value={deleteId}
              onChange={(e) => setDeleteId(e.target.value)}
            />
          </fieldset>
          <input type='submit' value='Delete' />
        </form>
      </div>
    </>
  );
}

export default DeleteUser;
