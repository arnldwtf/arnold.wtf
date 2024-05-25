import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import { TbArrowBigLeftFilled } from 'react-icons/tb';

import { useNavigate } from 'react-router-dom';

const PageNotFound = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

  return (
    <Grid gap={4} textAlign='center'>
      <Heading>Page Not Found</Heading>

      <Box maxWidth={[280, 400]} marginX='auto'>
        Oops!
      </Box>

      <Box>
        <Button
          // leftIcon={<TbArrowBigLeftFilled />}
          size='sm'
          borderRadius='lg'
          onClick={handleBackToHome}
        >
          <TbArrowBigLeftFilled />
        </Button>
      </Box>
    </Grid>
  );
};

export default PageNotFound;
