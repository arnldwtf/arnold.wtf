import { extendTheme } from '@chakra-ui/react';

import { config } from './config';

export const theme = extendTheme({
  fonts: {
    heading: 'Figtree, sans-serif',
    body: 'Figtree, sans-serif',
  },
  components: {
    // Button: {
    // }
  },
  config,
});
