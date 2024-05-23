import { Flex, Image } from '@chakra-ui/react';

import kawaii from '../../../assets/kawaii.gif';

const ICON_SIZE = 40;

const ContactImage = () => {
  return (
    <Flex marginY={4} justifyContent='center' alignItems='center' gridGap={2}>
      <Image
        src={kawaii}
        title='vite'
        height={ICON_SIZE}
        width={ICON_SIZE}
        borderRadius='lg'
        // borderRadius='full'
      />
    </Flex>
  );
};

export default ContactImage;
