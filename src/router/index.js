import { createHashRouter } from 'react-router-dom';
import Layout from '@/Layout';
import HomePage from '@/pages/Home';
import UserPage from '@/pages/User';
import UserDetail from '@/pages/User/Detail';
import UserList from '@/pages/User/List';
import LoginPage from '@/pages/Login';
import NotFound from '@/components/NotFound';

const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '/home', Component: HomePage },
      { path: '/login', Component: LoginPage },
      {
        path: '/user',
        Component: UserPage,
        children: [
          { path: '/user/detail', Component: UserDetail },
          { path: '/user/list', Component: UserList }
        ]
      },
      { path: '/404', Component: NotFound },
      // { path: '*', Component: HomePage },
    ]
  },
  { path: '*', Component: NotFound },
]

const router = createHashRouter(routes);

export default router;