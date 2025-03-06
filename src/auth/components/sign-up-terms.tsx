import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';

// ----------------------------------------------------------------------

export function SignUpTerms({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="span"
      sx={{
        mt: 3,
        display: 'block',
        textAlign: 'center',
        typography: 'caption',
        color: 'text.secondary',
        ...sx,
      }}
      {...other}
    >
      {" En m'inscrivant, j'accepte "}
      <Link underline="always" color="#30CB70">
        Conditions d`&apos;utilisation
      </Link>
      {' et '}
      <Link underline="always" color="#30CB70">
        Politique de confidentialité
      </Link>
      .
    </Box>
  );
}
