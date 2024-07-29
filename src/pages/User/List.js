import React from 'react';
import { useParams } from 'react-router-dom';

const User = () => {
  let { id } = useParams();
  return <h2>List User ID: {id}</h2>;
};

export default User;