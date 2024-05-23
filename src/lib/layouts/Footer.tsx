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
        {new Date().getFullYear()} -{' '}
        <Link href='https://arnold.wtf' isExternal>
          arnold.wtf
        </Link>
      </Text>
    </Flex>
  );
};

export default Footer;
