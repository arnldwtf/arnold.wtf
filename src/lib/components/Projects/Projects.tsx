import { Grid } from '@chakra-ui/react';

import ProjectsBody from './ProjectsBody';
import ProjectsImage from './ProjectsImage';
import ProjectsTitle from './ProjectsTitle';

const Projects = () => {
  return (
    <Grid gap={4}>
      <ProjectsTitle />
      <ProjectsImage />
      <ProjectsBody />
    </Grid>
  );
};

export default Projects;
