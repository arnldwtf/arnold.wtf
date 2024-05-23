import { Flex, Image } from '@chakra-ui/react';

import Glasses from '../../../../assets/glasses.gif';

const ICON_SIZE = 40;

const ImageComponent = () => {
  return (
    <Flex marginY={4} justifyContent='center' alignItems='center' gridGap={2}>
      <Image
        src={Glasses}
        title='vite'
        height={ICON_SIZE}
        width={ICON_SIZE}
        borderRadius='md'
      />
    </Flex>
  );
};

export default ImageComponent;
