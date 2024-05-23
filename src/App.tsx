import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './lib/layouts/Layout';
import AppRoutes from './lib/routes/AppRoutes';

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <Router>
          <Layout>
            <AppRoutes />
          </Layout>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
