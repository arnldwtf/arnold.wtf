import type { PathRouteProps } from 'react-router-dom';

import ContactPage from '../pages/ContactPage';
import ExperiencePage from '../pages/ExperiencePage';
import HomePage from '../pages/HomePage';
import ProjectsPage from '../pages/ProjectsPage';

interface RoutesProps {
  path: string;
  element: React.ReactNode;
}

// const Home = React.lazy(() => import('~/lib/pages/home'));

export const routes: RoutesProps[] = [
  {
    path: '/',
    element: <HomePage />,
  },
  {
    path: '/projects',
    element: <ProjectsPage />,
  },
  {
    path: '/experience',
    element: <ExperiencePage />,
  },
  {
    path: '/contact',
    element: <ContactPage />,
  },
];

export const privateRoutes: Array<PathRouteProps> = [];
