import { Grid, Heading, Text } from '@chakra-ui/react';

const HomeTitle = () => {
  return (
    <Grid textAlign='center' gap={2}>
      <Heading fontSize='2xl' fontWeight='extrabold'>
        Home Title Component Heading
      </Heading>

      <Text fontSize='sm'>Home Title Component Description</Text>
    </Grid>
  );
};

export default HomeTitle;
