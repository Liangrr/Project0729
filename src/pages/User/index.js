import React from 'react';
import { Outlet, useParams } from 'react-router-dom';

const User = () => {
  let { id } = useParams();
  return <div>
    <Outlet />
    User ID: {id}
  </div>;
};

export default User;