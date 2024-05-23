import { Grid, Heading, Text } from '@chakra-ui/react';

const ProjectsTitle = () => {
  return (
    <Grid textAlign='center' gap={2}>
      <Heading fontSize='2xl' fontWeight='extrabold'>
        Projects Title Component Heading
      </Heading>

      <Text fontSize='sm'>Projects Title Component Description</Text>
    </Grid>
  );
};

export default ProjectsTitle;
