import Box, { BoxProps } from '@mui/material/Box';

import { varAlpha } from 'src/theme/styles';

import { Iconify } from '../iconify';

// ----------------------------------------------------------------------
type OfferBoxProps = BoxProps & {
  value?: string;
  error?: Boolean;
};
export function OfferBox({ value, error, sx, ...other }: OfferBoxProps) {
  return (
    <Box
      sx={{
        ...sx,
      }}
    >
      <input value="stand" style={{ display: 'none' }} />
    </Box>
  );
}
