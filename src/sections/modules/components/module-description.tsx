import { Box, BoxProps, Button, Grid, Stack, Typography } from '@mui/material';
import { GraduateHateIcon } from 'src/sections/home/components/home-icon';
import { ModuleProps } from '../module-type';

// --------------------------
// Props
// --------------------------
type ModuleDescriptionProps = ModuleProps & {
  index: number;
  clickDetailModule: (param: number) => void;
} & BoxProps;

export function ModuleDescription({
  module,
  index,
  clickDetailModule,
  sx,
}: ModuleDescriptionProps) {
  // --------------------------
  // Rendered
  // --------------------------
  return (
    <>
      <Box borderRadius={1} border="1px solid rgba(217, 217, 217, 0.80)" sx={{ ...sx }}>
        <Button fullWidth onClick={() => clickDetailModule(index)}>
          <Grid container>
            <Grid item xs={12} md={8}>
              <Grid container>
                <Grid item xs={12} md={2}>
                  <Box
                    component="svg"
                    marginY="auto"
                    width={60}
                    height={60}
                    alignContent="center"
                    textAlign="left"
                    pt={1}
                  >
                    <GraduateHateIcon />
                  </Box>
                </Grid>
                <Grid item xs={12} md={10} marginY="auto">
                  <Typography variant="h6" alignContent="center" textAlign="left">
                    {module?.name}
                  </Typography>
                </Grid>
              </Grid>
            </Grid>
            <Grid item xs={12} md={4}>
              <Stack direction="column" p={2} sx={{ textAlign: 'right' }}>
                <Typography
                  variant="body1"
                  fontFamily="sans-serif"
                  fontSize={16}
                  fontStyle="normal"
                  fontWeight={600}
                  letterSpacing="-1px"
                >
                  {module?.price_month} FCFA
                </Typography>
                <Typography
                  variant="body2"
                  fontFamily="sans-serif"
                  fontSize={12}
                  fontStyle="normal"
                  fontWeight={400}
                  sx={{ opacity: 0.6 }}
                >
                  Par Mois
                </Typography>
              </Stack>
            </Grid>
          </Grid>
        </Button>
      </Box>
    </>
  );
}
