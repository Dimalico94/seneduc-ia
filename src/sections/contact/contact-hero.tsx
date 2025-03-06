import type { BoxProps } from '@mui/material/Box';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';
import Typography from '@mui/material/Typography';
import { m } from 'framer-motion';

import { varFade, AnimateText, MotionContainer } from 'src/components/animate';
import { Iconify } from 'src/components/iconify';

// ----------------------------------------------------------------------

export function ContactHero({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        backgroundColor: 'white',
        height: { md: 300 },
        py: { xs: 2, md: 5 },
        textAlign: 'center',
        ...sx,
      }}
      {...other}
    >
      <Container component={MotionContainer}>
        <AnimateText
          component="h1"
          variant="h1"
          text="Nous Contacter"
          variants={varFade({ distance: 24 }).inUp}
          sx={{
            color: 'primary.main',
            marginBottom: 5,
          }}
        />

        <Box
          columnGap={5}
          rowGap={5}
          display="grid"
          gridTemplateColumns={{ xs: '1fr', md: 'repeat(3, 1fr)' }}
          sx={{ color: 'text.primary' }}
        >
          <Box>
            <m.div variants={varFade({ distance: 24 }).inUp}>
              <Iconify
                icon="ic:baseline-phone-in-talk"
                width={40}
                sx={{ color: 'primary.main', mb: 1 }}
              />

              <Typography variant="h6" sx={{ mb: 1 }}>
                Numéro de contact
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                33 800 00 22
              </Typography>
            </m.div>
          </Box>

          <Box>
            <m.div variants={varFade({ distance: 24 }).inUp}>
              <Iconify
                icon="ic:outline-location-on"
                width={40}
                sx={{ color: 'primary.main', mb: 1 }}
              />
              <Typography variant="h6" sx={{ mb: 1 }}>
                Emplacement
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                Cité import et domaines, Villa 80-Patte d’oie, Dakar 3000
              </Typography>
            </m.div>
          </Box>

          <Box>
            <m.div variants={varFade({ distance: 24 }).inUp}>
              <Iconify icon="ic:outline-email" width={40} sx={{ color: 'primary.main', mb: 1 }} />
              <Typography variant="h6" sx={{ mb: 1 }}>
                E-mail
              </Typography>
              <Typography variant="body2" sx={{ opacity: 0.8 }}>
                info@seneduc.com
              </Typography>
            </m.div>
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
