import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { Layout } from 'antd';
import LHeader from './Header';
import HomePage from '@/pages/Home';
import UserPage from '@/pages/User';
import LoginPage from '@/pages/Login';
const { Content, Footer } = Layout;

const App = () => {
  return (
    <Layout>
      <LHeader />

      <Content style={{ minHeight: 'calc(100vh - 132px)' }}>
        <Routes>
          <Route path="/" element={<HomePage />} index />
          <Route path="/home" element={<HomePage />} />
          <Route path="/user" element={<UserPage />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
};

export default App;