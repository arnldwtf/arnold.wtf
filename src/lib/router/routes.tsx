import type { PathRouteProps } from 'react-router-dom';
import Home from '../pages/home/Home';

// const Home = React.lazy(() => import('~/lib/pages/home'));

export const routes: Array<PathRouteProps> = [
  {
    path: '/',
    element: <Home />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
