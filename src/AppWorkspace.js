import React from 'react';
import { Route, Link, useLocation } from 'react-router-dom'
import { NO_TOKEN_MENU } from './constants'
const HomePage = React.lazy(() => import('@/pages/Home'))
const UserPage = React.lazy(() => import('@/pages/User'))

import { Breadcrumb, Layout, Menu, theme } from 'antd';
const { Header, Content, Footer } = Layout;
const items = new Array(15).fill(null).map((_, index) => ({
  key: index + 1,
  label: `nav ${index + 1}`,
}));

const AppWorkspace = () => {
  // const loc = useLocation()
  // console.log(loc)

  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();


  return (
    <>
      8888
      <Layout>
        <Header
          style={{
            display: 'flex',
            alignItems: 'center',
          }}
        >
          <div className="demo-logo" />
          <Menu
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={['2']}
            items={items}
            style={{
              flex: 1,
              minWidth: 0,
            }}
          />
        </Header>
        {/* <Content
          style={{
            padding: '0 48px',
          }}
        >
          <Breadcrumb
            style={{
              margin: '16px 0',
            }}
          >
            <Breadcrumb.Item>Home</Breadcrumb.Item>
            <Breadcrumb.Item>List</Breadcrumb.Item>
            <Breadcrumb.Item>AppWorkspace</Breadcrumb.Item>
          </Breadcrumb>
          <div
            style={{
              background: colorBgContainer,
              minHeight: 280,
              padding: 24,
              borderRadius: borderRadiusLG,
            }}
          >
            Content
          </div>
        </Content> */}

        {/* <Route path="/" element={<HomePage />} />
        <Route path="/user/:id" element={<UserPage />} /> */}

        <Footer
          style={{
            textAlign: 'center',
          }}
        >
          Ant Design ©{new Date().getFullYear()} Created by Ant UED
        </Footer>
      </Layout>
    </>
  )
};

export default AppWorkspace;