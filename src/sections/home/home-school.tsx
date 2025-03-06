import { Box, BoxProps, Container, Grid, Stack, Typography } from '@mui/material';
import { CONFIG } from 'src/config-global';
import { Image } from 'src/components/image';
import { RedirectButton } from './components/home-button';

export function HomeSchoolApp({ sx, ...other }: BoxProps) {
  return (
    <Box component="section">
      <Grid
        container
        direction="row-reverse"
        spacing={2}
        pt={2}
        sx={{
          paddingInline: { xs: 2, md: 4, lg: 10 },
        }}
      >
        <Grid item xs={12} md={6} textAlign="left" margin="auto">
          <Stack spacing={2}>
            <Box>
              <Typography variant="h3" fontFamily="Public Sans" fontStyle="normal" lineHeight={1}>
                Gérez votre établissement scolaire avec{' '}
                <span style={{ fontSize: 40, color: '#004B86' }}>SamaEkole</span>
              </Typography>
            </Box>
            <Box>
              <Typography variant="body2" fontStyle="normal" lineHeight="normal">
                SaaS de gestion éducative qui simplifie l&apos;administration scolaire avec des
                modules personnalisables tels que la gestion administraive, le suivi des notes, la
                planification des cours, etc. Les écoles peuvent facilement souscrire à des forfaits
                sur mesure via une interface conviviale.
              </Typography>
            </Box>
            <Box>
              <RedirectButton title="Voir détails" />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={6}>
          {/* Image */}
          <Box px={5} maxWidth={800}>
            <Image alt="test" src={`${CONFIG.assetsDir}/assets/images/home/school-app.png`} />
          </Box>
        </Grid>
      </Grid>
    </Box>
  );
}
