import { Grid, Heading, Text } from '@chakra-ui/react';

const ContactTitle = () => {
  return (
    <Grid textAlign='center' gap={2}>
      <Heading fontSize='2xl' fontWeight='extrabold'>
        Contact Title Component Heading
      </Heading>

      <Text fontSize='sm'>Contact Title Component Description</Text>
    </Grid>
  );
};

export default ContactTitle;
