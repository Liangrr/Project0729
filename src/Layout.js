import React, { Suspense } from 'react';
import { useLocation, Outlet, useNavigate } from 'react-router-dom';
import { Layout, Menu } from 'antd';
import Breadcrumbs from '@/components/Breadcrumbs';
const { Header, Content, Footer } = Layout;

const LLayout = () => {
  const { pathname } = useLocation();
  const menuList = [
    { key: '/home', label: 'Home' },
    { key: '/login', label: 'Login' },
    {
      key: '/user',
      label: 'User',
      children: [
        { key: '/user/list', label: 'User List' },
        { key: '/user/detail', label: 'User Detail' }
      ]
    },
    { key: '/404', label: '404' }
  ]

  const navigate = useNavigate();

  return (
    <Layout>
      <Header style={{ display: 'flex', alignItems: 'center' }}>
        <Menu
          theme="dark"
          mode="horizontal"
          defaultSelectedKeys={pathname ? [pathname] : ['home']}
          items={menuList}
          style={{ flex: 1, minWidth: 0 }}
          onClick={(item) => {
            navigate(item.key)
          }}
        />
      </Header>

      <Content style={{ height: 'calc(100vh - 132px)', padding: '10px 20px' }}>
        <Breadcrumbs />
        <Suspense fallback={<div>loading...</div>}>
          <Outlet />
        </Suspense>
      </Content>

      <Footer style={{ textAlign: 'center' }}>
        Ant Design ©2018 Created by Ant UED
      </Footer>
    </Layout>
  )
};

export default LLayout;