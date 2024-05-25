import { Box, Flex, HStack, Text } from '@chakra-ui/react';
import { getData } from '../../config/getData';

const HomeBody = () => {
  const data = getData();

  return (
    <Box>
      {/* <Link
      _hover={undefined}
      href='https://github.com/arnldwtf/arnoldwtf'
      target='_blank'
      rel='noopener noreferrer'
    >
      <Button leftIcon={<TbBrandGithub />} size='sm' borderRadius='lg'>
        Github
      </Button>
    </Link> */}

      <Flex marginY={4} justifyContent='center' gridGap={2}>
        {Object.entries(data.about).map(([key, value]) => (
          <div key={key}>
            <Box>
              <HStack marginY={2} justifyContent='center'>
                <Text fontSize='sm' fontWeight=''>
                  {value.bio}
                </Text>
              </HStack>
            </Box>
          </div>
        ))}
      </Flex>
    </Box>
  );
};

export default HomeBody;
