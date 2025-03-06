import { Stack, Typography } from '@mui/material';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import { OffersView } from '../component/offers';

// ----------------------------------------------------------------------

export function PricesView() {
  return (
    <>
      <Container>
        <Stack direction="column" gap={2} pt={2}>
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
            Découvrez nos offres !
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
              Bienvenue dans la section abonnement de SenEduc, la solution complète pour une gestion
              efficace et moderne de votre établissement scolaire. Nous proposons une gamme de
              forfaits conçus pour répondre aux besoins spécifiques des écoles, des enseignants, et
              des parents d&apos;éléves. Explorez nos offres ci-dessous pour trouver celle qui
              convient le mieux à vos objectifs.
            </Typography>
          </Box>
        </Stack>
        <Box py={5}>
          <OffersView />
        </Box>
      </Container>
    </>
  );
}
