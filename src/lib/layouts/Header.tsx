import { Box, Flex } from '@chakra-ui/react';
import Navbar from '../components/Navbar/Navbar';
import ThemeToggle from './ThemeToggle';

const Header = () => {
  return (
    <Flex
      as='header'
      width='full'
      align='center'
      alignSelf='flex-start'
      justifyContent='space-evenly'
      // justifyContent='center'
      gridGap={2}
    >
      <Box>
        <Navbar />
      </Box>

      <Box>
        {/* <Box marginLeft='auto'> */}
        <ThemeToggle />
      </Box>
    </Flex>
  );
};

export default Header;
