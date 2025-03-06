import {
  Box,
  BoxProps,
  Container,
  Grid,
  keyframes,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { CONFIG } from 'src/config-global';

import { Image } from 'src/components/image';
import { RedirectButton } from './components/home-button';
import {
  AnalyticsBox,
  AssitanceCustomerBox,
  CommissionBox,
  CoursesBox,
  FreeTrialBox,
  NotificationBox,
  StudentsBox,
} from './components/home-box';

const ScrollingVerticalContainer = styled(Box)({
  overflow: 'hidden',
  position: 'relative',
  height: 50,
});

const ScrollAnimation = keyframes`
  0% {
    transform: translateY(0%);
  }
  100% {
    transform: translateY(-100%);
  }
`;

const AnimatedItem = styled(Box)(({ theme }) => ({
  animation: `${ScrollAnimation} 10s linear infinite`,
}));

export function HomePresentation({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        ...sx,
      }}
      {...other}
    >
      <Grid
        container
        spacing={2}
        pt={2}
        sx={{
          paddingInline: { xs: 2, md: 4, lg: 10 },
        }}
      >
        <Grid item xs={12} md={6}>
          <Container>
            <Box
              p={1}
              display="flex"
              textAlign="center"
              alignItems="center"
              width="-webkit-fill-available"
            >
              <ScrollingVerticalContainer>
                <AnimatedItem sx={{ color: '#004B86' }}>
                  <Typography variant="h3" pr={3} fontSize={{ xs: 26, md: 32, lg: 48 }}>
                    Eduquer
                  </Typography>
                  <Typography variant="h3" pr={3} fontSize={{ xs: 26, md: 32, lg: 48 }}>
                    Gérer
                  </Typography>
                  <Typography variant="h3" pr={3} fontSize={{ xs: 26, md: 32, lg: 48 }}>
                    Innover
                  </Typography>
                </AnimatedItem>
              </ScrollingVerticalContainer>
              <Box display="flex" alignItems="center">
                <Typography variant="h2" fontSize={{ xs: 16, md: 24, lg: 32 }} p={2}>
                  -
                </Typography>
                <Typography variant="h4" fontSize={{ xs: 16, md: 24, lg: 32 }}>
                  Tout en un seul endroit !
                </Typography>
              </Box>
            </Box>
            <Typography
              variant="body2"
              fontSize={{ xs: 14, md: 16, lg: 24 }}
              pb={1}
              maxWidth={{ xs: 500, md: 600, lg: 700 }}
            >
              Gagnez du temps, améliorez votre organisation et offrez une meilleure expérience pour
              les enseignants, éléves et parents d’éléves.
            </Typography>
            <Box pt={1} pb={1}>
              <RedirectButton title="Demander une démo" />
            </Box>
          </Container>
        </Grid>
        <Grid item xs={12} md={6} textAlign="center" alignItems="center">
          <Container
            disableGutters
            sx={{ display: 'flex', position: 'relative', width: 'fit-content' }}
          >
            {/* Image */}
            <Box width={{ xs: 180, md: 250, lg: 300 }} height="auto">
              <Image alt="test" src={`${CONFIG.assetsDir}/assets/images/home/student.png`} />
            </Box>
            {/* Box Analytics */}

            <AnalyticsBox
              sx={{
                width: 'auto',
                position: 'absolute',
                marginLeft: { xs: 14, md: 20 },
              }}
            />
            {/* Box Students */}
            <StudentsBox
              sx={{
                position: 'absolute',
                marginTop: '30%',
                marginLeft: { xs: -8, md: -5 },
              }}
            />
            {/* Box Notification */}
            <NotificationBox
              sx={{
                position: 'absolute',
                marginTop: '50%',
                marginLeft: { xs: 16, md: 22 },
              }}
            />
            {/* Box courses */}
            <CoursesBox
              sx={{
                position: 'absolute',
                marginTop: '75%',
                marginLeft: { xs: -10, md: -13 },
              }}
            />
          </Container>
        </Grid>
      </Grid>
      <Stack
        direction="row"
        spacing={4}
        p={1}
        sx={{ boxShadow: '1.5px 1.5px 30px 0px rgba(0, 75, 134, 0.06)' }}
      >
        <AssitanceCustomerBox />
        <CommissionBox />
        <FreeTrialBox />
      </Stack>
    </Box>
  );
}
