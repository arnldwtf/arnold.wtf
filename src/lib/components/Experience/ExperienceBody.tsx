import { Box, Grid, Text, VStack } from '@chakra-ui/react';

import { getData } from '../../config/getData';

const ExperienceBody = () => {
  const data = getData();

  return (
    <Box textAlign='center'>
      {/* <Link
        _hover={undefined}
        href='https://github.com/arnldwtf/arnoldwtf'
        target='_blank'
        rel='noopener noreferrer'
      >
        <Button leftIcon={<TbBrandGithub />} size='sm' borderRadius='lg'>
          Github
        </Button>
      </Link> */}

      <Grid marginY={4} gridGap={2}>
        {/* <Flex marginY={4} justifyContent='center' gridGap={2}> */}
        {/* <Text fontSize='sm'>Experience Body Component</Text> */}

        {/* <Grid gap={2} textAlign='center'> */}
        {Object.entries(data.experience).map(([key, value]) => (
          <div key={key}>
            <Box>
              <VStack marginY={2}>
                <Text fontSize='sm' fontWeight=''>
                  {value.company} / {value.title}
                  <Text fontSize='x-small' fontWeight=''>
                    {value.duration}
                  </Text>
                  <Text fontSize='x-small' fontWeight=''>
                    {value.technologies.join(' | ')}
                  </Text>
                </Text>

                <Text fontSize='xs' fontWeight=''>
                  {value.summary}
                </Text>
              </VStack>
            </Box>
          </div>
        ))}
        {/* </Grid> */}
      </Grid>
    </Box>
  );
};

export default ExperienceBody;
