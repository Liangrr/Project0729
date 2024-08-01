import React from 'react';
import { RouterProvider } from 'react-router-dom';
import router from './router/index';
import { ConfigProvider } from 'antd';
import { Provider } from 'react-redux';
import store from './store/index';

const App = () => {
  return (
    <Provider store={store}>
      <ConfigProvider theme={{ cssVar: true }}>
        <RouterProvider router={router} />
      </ConfigProvider>
    </Provider>
  )
};

export default App;