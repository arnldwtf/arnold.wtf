import { Grid } from '@chakra-ui/react';

import HomeBody from './HomeBody';
import HomeImage from './HomeImage';
import HomeTitle from './HomeTitle';

const Home = () => {
  return (
    <Grid gap={4}>
      <HomeTitle />
      <HomeImage />
      <HomeBody />
    </Grid>
  );
};

export default Home;
