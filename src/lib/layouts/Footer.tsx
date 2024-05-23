import { Flex, Link, Text } from '@chakra-ui/react';

const Footer = () => {
  return (
    <Flex
      as='footer'
      width='full'
      align='center'
      alignSelf='flex-end'
      justifyContent='center'
    >
      <Text fontSize='xs'>
        <Link href='https://arnold.wtf' isExternal>
          Footer -{' '}
        </Link>
        {new Date().getFullYear()}
      </Text>
    </Flex>
  );
};

export default Footer;
