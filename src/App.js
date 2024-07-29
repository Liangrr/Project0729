import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/index';
import { ConfigProvider } from 'antd';

const App = () => {
  return (
    <ConfigProvider theme={{ cssVar: true }}>
      <RouterProvider router={router} />
    </ConfigProvider>
  )
};

export default App;