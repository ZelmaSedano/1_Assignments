import React, { useState } from 'react';

// use the imported deleteUser func to delete a user

function DeleteUser({ deleteUser }) {
  // state
  const [deleteId, setDeleteId] = useState('');

  return (
    <div>
      <h3>Delete User</h3>
      <form id='delete-user' action='#'>
        <fieldset>
          <label>User ID</label>
          <input
            type='text'
            id='delete-user-id'
            value={deleteId}
            onChange={(e) => setDeleteId(e.target.value)}
          />
        </fieldset>
        <input
          type='submit'
          value='Delete'
          onClick={(e) => {
            e.preventDefault();
            deleteUser(deleteId);
          }}
        />
      </form>
    </div>
  );
}

export default DeleteUser;
