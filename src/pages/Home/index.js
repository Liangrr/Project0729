import React from 'react';
import { useNavigate } from 'react-router-dom';

const Home = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate({
      pathname: '/user',
      state: { name: 'John Doe' }
    })
  }
  return <>
    <h2>Home Page</h2>
    <button onClick={handleClick}>Go to User Page</button>
  </>;
};

export default Home;