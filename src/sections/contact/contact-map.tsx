import type { BoxProps } from '@mui/material/Box';

import { Box } from '@mui/material';
/* import Map from 'react-map-gl'; */

// ----------------------------------------------------------------------

export function ContactMap({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        height: { xs: 400, md: 600 },
        backgroundColor: 'grey.100', // Couleur de fond si la carte ne charge pas
        ...sx,
      }}
      {...other}
    >
      In progress...
      {/*  <Map
        initialViewState={{
          longitude: -17.44, // Exemple : Dakar
          latitude: 14.748,
          zoom: 14,
        }}
        style={{ width: '100%', height: '100%' }}
        mapStyle="https://basemaps.cartocdn.com/gl/positron-gl-style/style.json" // Style open-source sans clé
      /> */}
    </Box>
  );
}
