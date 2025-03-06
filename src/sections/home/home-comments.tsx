import { Box, BoxProps, Container, Stack, Typography, useTheme } from '@mui/material';
import { CONFIG } from 'src/config-global';
import { Image } from 'src/components/image';
import { NextIcon, PreviousIcon } from './components/home-icon';

export function HomeComments({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  return (
    <Box component="section">
      <Container>
        <Box
          display="flex"
          flexDirection="column"
          p={2}
          sx={{ background: '#FAFAFA' }}
          boxShadow="1.5px 1.5px 30px 0px rgba(0, 75, 134, 0.06)"
        >
          <Typography variant="h3" fontFamily="Public Sans" pl={2} py={1}>
            Que <span style={{ color: '#015A7F' }}>disent-ils ?</span>
          </Typography>
          <Box
            width={200}
            pl={2}
            sx={{
              [theme.breakpoints.up('md')]: {
                position: 'absolute',
                right: 100,
                mt: -4,
                width: 290,
              },
            }}
          >
            <Image alt="test" src={`${CONFIG.assetsDir}/assets/images/home/director.png`} />
          </Box>
          <Typography
            variant="h6"
            fontFamily="Public Sans"
            maxWidth={{ md: 400, lg: 500 }}
            pl={2}
            py={1}
          >
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore.
          </Typography>
          <Box pl={2} py={1}>
            <Typography variant="body2" color="#004B86" fontSize={16}>
              - Mady COLY
            </Typography>
            <Typography variant="body2" color="#004B86" fontSize={14} sx={{ opacity: '0.6' }}>
              Directeur d&apos;école
            </Typography>
          </Box>
          <Stack direction="row" gap={1} pl={2} py={1}>
            <PreviousIcon />
            <NextIcon />
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
