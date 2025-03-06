import { Box, BoxProps, Grid, Stack, Typography } from '@mui/material';

import { CONFIG } from 'src/config-global';
import { Carousel, CarouselArrowBasicButtons, useCarousel } from 'src/components/carousel';
import { RedirectButton } from './components/home-button';
import { ModuleItem } from './components/home-box';
import { ModuleItemProps } from './home-types';

export function HomeModules({ sx, ...other }: BoxProps) {
  const _mockModules: Array<ModuleItemProps> = [
    {
      module: {
        title: "Gestion de l'établissemnt",
        description:
          'Facilite la gestion des apprenants, des professeurs, des classes et de la communication',
        numberSchoolUsed: 50,
        logo: `${CONFIG.assetsDir}/assets/images/mock/company/company-2.webp`,
      },
    },
    {
      module: {
        title: 'Gestion des Admissions',
        description: 'Automatise les admissions, les inscriptions, les depots de cancditures, etc.',
        numberSchoolUsed: 20,
      },
    },
    {
      module: {
        title: 'Gestion des Ressources humaines',
        description: 'Facilite la gestion du personnel, des congés, des fiches de paies, etc.',
        numberSchoolUsed: 5,
      },
    },
  ];

  const carousel = useCarousel({
    align: 'start',
    slideSpacing: '24px',
    slidesToShow: { xs: 1, sm: 2, md: 3, lg: '40%', xl: '30%' },
  });

  return (
    <Box component="section">
      <Grid
        container
        spacing={2}
        sx={{
          paddingInline: { xs: 2, md: 4, lg: 10 },
        }}
      >
        <Grid item xs={12} md={5} textAlign="left" margin="auto">
          <Stack spacing={2}>
            <Box>
              <Typography variant="h3" fontFamily="Public Sans" fontStyle="normal" lineHeight={1}>
                Découvrez Nos{' '}
                <span style={{ fontSize: 32, color: '#004B86' }}>Meilleurs Modules</span>
              </Typography>
            </Box>
            <Box maxWidth={600}>
              <Typography variant="body2" fontStyle="normal" lineHeight="normal">
                Choisissez les modules adaptés pour simplifier la gestion de votre établissement,
                des dossiers et notes des apprenants, de la gestion de vos finances jusqu&apos;à des
                conseils personnalisés, tout en un système transparent.
              </Typography>
            </Box>
            <Box>
              <RedirectButton title="Voir détails" />
            </Box>
          </Stack>
        </Grid>
        <Grid item xs={12} md={7}>
          <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'end' }}>
            <CarouselArrowBasicButtons {...carousel.arrows} />
          </Box>
          <Carousel
            carousel={carousel}
            slotProps={{
              slide: { py: 1 },
            }}
            sx={{ px: 0.5 }}
          >
            {_mockModules.map((item) => (
              <ModuleItem key={item.module.title} module={item.module} />
            ))}
          </Carousel>
        </Grid>
      </Grid>
    </Box>
  );
}
