import { Box, Button, Flex, Link, Text } from '@chakra-ui/react';

import { TbBrandGithub } from 'react-icons/tb';

const BodyComponent = () => (
  <Box textAlign='center'>
    <Link _hover={undefined} href='https://github.com/arnldwtf/arnoldwtf'>
      <Button leftIcon={<TbBrandGithub />} size='sm' borderRadius='md'>
        Github
      </Button>
    </Link>

    <Flex marginY={4} justifyContent='center' gridGap={2}>
      <Text fontSize='sm'>Body Component</Text>
    </Flex>
  </Box>
);

export default BodyComponent;
