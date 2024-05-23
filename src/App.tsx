import { ChakraProvider } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';
import { BrowserRouter as Router } from 'react-router-dom';

import Layout from './lib/layouts/Layout';
import AppRouter from './lib/router/AppRouter';

const App = () => {
  return (
    <HelmetProvider>
      <ChakraProvider>
        <Router>
          <Layout>
            <AppRouter />
          </Layout>
        </Router>
      </ChakraProvider>
    </HelmetProvider>
  );
};

export default App;
