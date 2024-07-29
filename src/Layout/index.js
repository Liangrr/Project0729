import React, {Suspense} from 'react';
import { useLocation,  Outlet  } from 'react-router-dom';
import { Layout } from 'antd';
import LHeader from '@/Header';
import { NO_TOKEN_MENU } from '@/constants'
const { Content, Footer } = Layout;

const LLayout = () => {
  const location = useLocation();
  console.log(location, NO_TOKEN_MENU);
  return (
    <Layout>
      <LHeader />

      <Content style={{ height: 'calc(100vh - 132px)'}}>
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