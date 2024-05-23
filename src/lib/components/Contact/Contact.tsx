import { Grid } from '@chakra-ui/react';

import ContactBody from './ContactBody';
import ContactImage from './ContactImage';
import ContactTitle from './ContactTitle';

const Contact = () => {
  return (
    <Grid gap={4}>
      <ContactTitle />
      <ContactImage />
      <ContactBody />
    </Grid>
  );
};

export default Contact;
