import { Grid, Heading, Text } from '@chakra-ui/react';

const ExperienceTitle = () => {
  return (
    <Grid textAlign='center' gap={2}>
      <Heading fontSize='2xl' fontWeight='extrabold'>
        Experience Title Component Heading
      </Heading>

      <Text fontSize='sm'>Experience Title Component Description</Text>
    </Grid>
  );
};

export default ExperienceTitle;
