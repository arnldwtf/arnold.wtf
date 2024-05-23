import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../components/auth/Auth';
import Page404 from '../pages/page404/Page404';

import { privateRoutes, routes } from './routes';

const AppRouter = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          <Route {...routeProps} key={routeProps.path as string} />
        ))}
        {privateRoutes.map(({ element, ...privateRouteProps }) => (
          <Route
            element={
              <Auth redirectTo={`/login?redirectTo=${privateRouteProps.path}`}>
                {element}
              </Auth>
            }
            {...privateRouteProps}
            key={`privateRoute-${privateRouteProps.path}`}
          />
        ))}
        <Route path='*' element={<Page404 />} />
      </Routes>
    </Suspense>
  );
};

export default AppRouter;
