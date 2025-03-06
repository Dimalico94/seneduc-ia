import { Box, BoxProps, Container, Stack, Typography } from '@mui/material';
import { CONFIG } from 'src/config-global';
import { Image } from 'src/components/image';
import { RedirectButton } from './components/home-button';

export function HomeGuide({ sx, ...other }: BoxProps) {
  return (
    <Box component="section">
      <Container>
        <Stack spacing={2} paddingInline={{ xs: 2, md: 6, lg: 12 }} textAlign="center">
          <Box>
            <Typography variant="h2" fontFamily="Public Sans" fontStyle="normal" lineHeight={1}>
              Explorer le Guide ultime pour une
            </Typography>
            <Typography
              variant="h2"
              fontFamily="Public Sans"
              fontStyle="normal"
              lineHeight={1}
              color="#004B86"
            >
              Gestion efficace de votre établissement
            </Typography>
          </Box>
          <Box>
            <Typography variant="body2" fontStyle="normal" lineHeight="normal">
              SaaS de gestion éducative qui simplifie l&apos;administration scolaire avec des
              modules personnalisables tels que la gestion scolaire et le suivi des notes. Les
              écoles peuvent facilement souscrire à des forfaits sur mesure via une interface
              conviviale.
            </Typography>
          </Box>
          <Box>
            <RedirectButton title="Voir détails" />
          </Box>
          <Box maxWidth={800}>
            <Image
              alt="school-app-demo"
              src={`${CONFIG.assetsDir}/assets/images/home/school-app-demo.png`}
            />
          </Box>
        </Stack>
      </Container>
    </Box>
  );
}
