import { Box, Button, Grid, Heading } from '@chakra-ui/react';
import { TbArrowLeft } from 'react-icons/tb';

import { useNavigate } from 'react-router-dom';

const Page404 = () => {
  const navigate = useNavigate();

  const handleBackToHome = () => navigate('/');

  return (
    <Grid gap={4} textAlign='center'>
      <Heading>Page Not Found</Heading>

      <Box maxWidth={[280, 400]} marginX='auto'>
        Page 404 Content
      </Box>

      <Box>
        <Button
          leftIcon={<TbArrowLeft />}
          size='sm'
          borderRadius='md'
          onClick={handleBackToHome}
        ></Button>
      </Box>
    </Grid>
  );
};

export default Page404;
