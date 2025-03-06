import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { FormWizardSubscription } from 'src/components/form-wizard-subscription/form-wizard';

// ----------------------------------------------------------------------

export function SubscriptionView() {
  return (
    <>
      <Container>
        <Stack direction="column" gap={2}>
          <Typography
            color="#004B86"
            variant="h1"
            textAlign="center"
            fontFamily="sans-serif"
            fontStyle="normal"
            fontWeight={500}
            lineHeight=" 117.465%"
            textTransform="capitalize"
          >
            {' Souscrivez le meilleur pour votre établissement !'}
          </Typography>
          <Box paddingX={{ xs: 2, md: 10 }}>
            <Typography
              variant="body2"
              color="#202020"
              textAlign="center"
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={400}
              lineHeight="normal"
            >
              Choisissez parmi des modules adaptés pour simplifier la gestion de l&apos;école, des
              dossiers et notes des élèves à des conseils personnalisés, le tout dans un seul
              système transparent. Choisissez un plan prédéfini ou créez-en un personnalisé qui
              répond à vos besoins.
            </Typography>
          </Box>
        </Stack>
        <Box py={5}>
          <FormWizardSubscription />
        </Box>
      </Container>
    </>
  );
}
