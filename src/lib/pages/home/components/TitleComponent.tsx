import { Grid, Heading, Text } from '@chakra-ui/react';

const TitleComponent = () => {
  return (
    <Grid textAlign='center' gap={2}>
      <Heading fontSize='2xl' fontWeight='extrabold'>
        Title Component Heading
      </Heading>

      <Text fontSize='sm'>Title Component Description</Text>
    </Grid>
  );
};

export default TitleComponent;
