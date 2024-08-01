import React from 'react';
import { Outlet, useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { addUser, removeUser } from '@/store/userSlice';

const User = () => {
  let { id } = useParams();
  const dispatch = useDispatch();
  const users = useSelector(state => state.user.users);

  const handleAddUser = () => {
    const time = new Date().getTime()
    dispatch(addUser({ id: time, name: `User ${time}` }));
  };

  const handleRemoveUser = () => {
    dispatch(removeUser(id));
  };

  return (
    <div>
      <Outlet />
      <h2>User ID: {id}</h2>
      <button onClick={handleAddUser}>Add User</button>
      <button onClick={handleRemoveUser}>Remove User</button>
      <div>
        <h3>Users List:</h3>
        <ul>
          {users.map(user => (
            <li key={user.id}>{user.name}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default User;