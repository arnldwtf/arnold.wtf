import { Grid } from '@chakra-ui/react';

import BodyComponent from './components/BodyComponent';
import ImageComponent from './components/ImageComponent';
import TitleComponent from './components/TitleComponent';

const Home = () => {
  return (
    <Grid gap={4}>
      <TitleComponent />
      <ImageComponent />
      <BodyComponent />
    </Grid>
  );
};

export default Home;
