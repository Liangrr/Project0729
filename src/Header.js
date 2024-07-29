import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { Layout, Menu, Breadcrumb } from 'antd';
const { Header, Content, Footer } = Layout;
const { SubMenu } = Menu;

// 封装的嵌套路由组件
const LHeader = () => {
  return (
    <Header>
      {/* 导航菜单 */}
      <Menu theme="dark" mode="horizontal">
        <Menu.Item key="home">
          <Link to="/home">Home</Link>
        </Menu.Item>
        <SubMenu key="sub1" title="Submenu1">
          <Menu.Item key="1">
            <Link to="/about">About</Link>
          </Menu.Item>
          <Menu.Item key="2">
            <Link to="/dashboard">Dashboard</Link>
          </Menu.Item>
        </SubMenu>
        <Menu.Item key="user">
          <Link to="/user">User</Link>
        </Menu.Item>
        <Menu.Item key="login">
          <Link to="/login">Login</Link>
        </Menu.Item>
      </Menu>
    </Header>
  );
};

export default LHeader;