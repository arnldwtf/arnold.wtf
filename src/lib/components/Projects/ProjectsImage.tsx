import { Flex, Image } from '@chakra-ui/react';

import calculating from '../../../assets/calculating.gif';

const ICON_SIZE = 40;

const ProjectsImage = () => {
  return (
    <Flex marginY={4} justifyContent='center' alignItems='center' gridGap={2}>
      <Image
        src={calculating}
        title='vite'
        height={ICON_SIZE}
        width={ICON_SIZE}
        borderRadius='lg'
        // borderRadius='full'
      />
    </Flex>
  );
};

export default ProjectsImage;
