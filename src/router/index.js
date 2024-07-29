import { createBrowserRouter } from 'react-router-dom';
import Layout from '@/Layout';
import HomePage from '@/pages/Home';
import UserPage from '@/pages/User';
import LoginPage from '@/pages/Login';
import NotFound from '@/components/NotFound';

const routes = [
  {
    path: '/',
    Component: Layout,
    children: [
      { path: '/home', Component: HomePage },
      { path: '/login', Component: LoginPage },
      { path: '/user', Component: UserPage },
      { path: '/404', Component: NotFound },
      // { path: '*', Component: HomePage },
    ]
  },
  { path: '*', Component: NotFound },
]

const router = createBrowserRouter(routes);

export default router;