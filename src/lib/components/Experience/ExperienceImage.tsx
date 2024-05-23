import { Flex, Image } from '@chakra-ui/react';

import clipboard from '../../../assets/clipboard.gif';

const ICON_SIZE = 40;

const ExperienceImage = () => {
  return (
    <Flex marginY={4} justifyContent='center' alignItems='center' gridGap={2}>
      <Image
        src={clipboard}
        title='vite'
        height={ICON_SIZE}
        width={ICON_SIZE}
        borderRadius='lg'
        // borderRadius='full'
      />
    </Flex>
  );
};

export default ExperienceImage;
