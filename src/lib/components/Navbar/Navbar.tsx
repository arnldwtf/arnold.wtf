import { Flex, IconButton } from '@chakra-ui/react';
import { RiHome2Fill } from 'react-icons/ri';
import { TbAppsFilled, TbFileFilled, TbMailFilled } from 'react-icons/tb';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
  return (
    <Flex
      // as='header'
      // width='full'
      // align='center'
      // alignSelf='flex-start'
      // justifyContent='center'
      gridGap={4}
    >
      <NavLink
        to='/'
        //     className={({ isActive }) =>
        //       isActive
        //         ? 'bg-white rounded-full p-2 transition-all duration-300'
        //         : 'opacity-50 p-2 hover:bg-white rounded-full transition-all duration-300 hover:opacity-100'
        //     }
      >
        <IconButton
          aria-label='home'
          icon={<RiHome2Fill />}
          // icon={<RiHome2Line />}
          // icon={colorMode === 'light' ? <TbMoonFilled /> : <TbSun />}
          // onClick={toggleColorMode}
          borderRadius='lg'
          size='sm'
        />
      </NavLink>

      <NavLink to='/projects'>
        <IconButton
          aria-label='projects'
          // icon={<TbBrandGithubFilled />}
          // icon={<TbApps />}
          icon={<TbAppsFilled />}
          // icon={<TbDeviceDesktopCode />}
          // icon={colorMode === 'light' ? <TbMoonFilled /> : <TbSun />}
          // onClick={toggleColorMode}
          borderRadius='lg'
          size='sm'
        />
      </NavLink>

      <NavLink to='/experience'>
        <IconButton
          aria-label='experience'
          // icon={<TbBriefcase2Filled />}
          // icon={<TbFileCv />}
          icon={<TbFileFilled />}
          // icon={colorMode === 'light' ? <TbMoonFilled /> : <TbSun />}
          // onClick={toggleColorMode}
          borderRadius='lg'
          size='sm'
        />
      </NavLink>

      <NavLink to='/contact'>
        <IconButton
          aria-label='contact'
          // icon={<TbMail />}
          icon={<TbMailFilled />}
          // icon={colorMode === 'light' ? <TbMoonFilled /> : <TbSun />}
          // onClick={toggleColorMode}
          borderRadius='lg'
          size='sm'
        />
      </NavLink>
    </Flex>
  );
};
export default Navbar;
