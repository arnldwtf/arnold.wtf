import { IconButton, useColorMode } from '@chakra-ui/react';
import { TbMoonFilled, TbSun } from 'react-icons/tb';

const ThemeToggle = () => {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <IconButton
      aria-label='theme toggle'
      icon={colorMode === 'light' ? <TbMoonFilled /> : <TbSun />}
      onClick={toggleColorMode}
      borderRadius='md'
      size='sm'
    />
  );
};

export default ThemeToggle;
