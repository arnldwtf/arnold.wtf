import { IconButton, useColorMode } from '@chakra-ui/react';
// import { TbMoon, TbSun } from 'react-icons/tb';
import { TbMoonFilled, TbSunFilled } from 'react-icons/tb';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='theme toggle'
      // icon={colorMode === 'light' ? <TbMoon /> : <TbSun />}
      icon={colorMode === 'light' ? <TbMoonFilled /> : <TbSunFilled />}
      onClick={toggleColorMode}
      borderRadius='lg'
      size='sm'
    />
  );
};

export default ThemeToggle;
