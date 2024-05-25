import { Box, Grid, HStack, Heading, IconButton, Link } from '@chakra-ui/react';
import {
  TbBrandDiscord,
  TbBrandGithub,
  TbBrandLinkedin,
  TbMail,
} from 'react-icons/tb';
import { getData } from '../../config/getData';

const ContactTitle = () => {
  const data = getData();

  return (
    <Grid gap={2}>
      {Object.entries(data.about).map(([key, value]) => (
        <div key={key}>
          <Box>
            <Heading textAlign='center' fontSize='2xl' fontWeight='extrabold'>
              Contact
            </Heading>

            <HStack marginY={2} justifyContent='center'>
              {/* <Text fontSize='sm' fontWeight=''>
                {value.title}
              </Text> */}
              <Link
                _hover={undefined}
                href={value.contact.linkedIn}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton
                  aria-label='contact linkedin-icon'
                  icon={<TbBrandLinkedin />}
                  size='sm'
                  borderRadius='lg'
                />
              </Link>
              <Link
                _hover={undefined}
                href={value.contact.github}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton
                  aria-label='contact github-icon'
                  icon={<TbBrandGithub />}
                  size='sm'
                  borderRadius='lg'
                />
              </Link>
              <Link
                _hover={undefined}
                href={value.contact.discord}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton
                  aria-label='contact discord-icon'
                  icon={<TbBrandDiscord />}
                  size='sm'
                  borderRadius='lg'
                />
              </Link>
              <Link
                _hover={undefined}
                href={value.contact.email}
                target='_blank'
                rel='noopener noreferrer'
              >
                <IconButton
                  aria-label='contact email-icon'
                  icon={<TbMail />}
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

export default ContactTitle;
