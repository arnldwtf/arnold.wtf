import { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';

import Auth from '../components/Auth/Auth';

import PageNotFound from '../pages/PageNotFound';
import { privateRoutes, routes } from './routes';

const AppRoutes = () => {
  return (
    <Suspense>
      <Routes>
        {routes.map((routeProps) => (
          // <Route {...routeProps} key={routeProps.path as string} />
          <Route {...routeProps} key={`${routeProps.path}`} />
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

        <Route path='*' element={<PageNotFound />} />
      </Routes>
    </Suspense>
  );
};

export default AppRoutes;
