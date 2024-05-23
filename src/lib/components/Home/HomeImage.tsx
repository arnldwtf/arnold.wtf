import { Flex, Image } from '@chakra-ui/react';

import glasses from '../../../assets/glasses.gif';

const ICON_SIZE = 40;

const HomeImage = () => {
  return (
    <Flex marginY={4} justifyContent='center' alignItems='center' gridGap={2}>
      <Image
        src={glasses}
        title='vite'
        height={ICON_SIZE}
        width={ICON_SIZE}
        borderRadius='lg'
        // borderRadius='full'
      />
    </Flex>
  );
};

export default HomeImage;
