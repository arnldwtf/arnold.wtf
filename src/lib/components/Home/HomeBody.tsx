import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';

import { TbBrandGithub } from 'react-icons/tb';

const HomeBody = () => (
  <Box textAlign='center'>
    <Link _hover={undefined} href='https://github.com/arnldwtf/arnoldwtf'>
      <Button leftIcon={<TbBrandGithub />} size='sm' borderRadius='lg'>
        Github
      </Button>
    </Link>

    <Flex marginY={4} justifyContent='center' gridGap={2}>
      <Text fontSize='sm'>Home Body Component</Text>
    </Flex>
  </Box>
);

export default HomeBody;
