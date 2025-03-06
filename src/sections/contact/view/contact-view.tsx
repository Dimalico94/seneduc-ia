import { Stack } from '@mui/material';
import Container from '@mui/material/Container';
import { ContactHero } from '../contact-hero';
import { ContactForm } from '../contact-form';
import { ContactMap } from '../contact-map';

// ----------------------------------------------------------------------

export function ContactView() {
  return (
    <>
      <Container component="section">
        <Stack gap={{ xs: 5, md: 10 }}>
          <ContactHero />
          <ContactForm />
          <ContactMap />
        </Stack>
      </Container>
    </>
  );
}
