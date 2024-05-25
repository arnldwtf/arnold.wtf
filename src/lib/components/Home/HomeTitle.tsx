import {
  Box,
  Grid,
  HStack,
  Heading,
  IconButton,
  Link,
  Text,
} from '@chakra-ui/react';
import { TbBrandGithub } from 'react-icons/tb';
import { getData } from '../../config/getData';

const HomeTitle = () => {
  const data = getData();

  return (
    <Grid gap={2}>
      {Object.entries(data.about).map(([key, value]) => (
        <div key={key}>
          <Box>
            <Heading textAlign='center' fontSize='2xl' fontWeight='extrabold'>
              {value.name}
            </Heading>

            <HStack marginY={2} justifyContent='center'>
              <Text fontSize='sm' fontWeight=''>
                {value.title}
              </Text>

              <Link
                _hover={undefined}
                href={value.contact.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton
                  aria-label='home github-icon'
                  icon={<TbBrandGithub />}
                  size='sm'
                  borderRadius='lg'
                />
              </Link>
            </HStack>
          </Box>
        </div>
      ))}
    </Grid>
  );
};

export default HomeTitle;

{
  /* <Text fontSize='sm' fontWeight=''>
  {value.bio}
</Text>; */
}
