import { Grid } from '@chakra-ui/react';

import ExperienceBody from './ExperienceBody';
import ExperienceImage from './ExperienceImage';
import ExperienceTitle from './ExperienceTitle';

const Experience = () => {
  return (
    <Grid gap={4}>
      <ExperienceTitle />
      <ExperienceImage />
      <ExperienceBody />
    </Grid>
  );
};

export default Experience;
