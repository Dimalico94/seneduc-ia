import type { BoxProps } from '@mui/material/Box';

import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';

// ----------------------------------------------------------------------

type FormHeadProps = BoxProps & {
  icon?: React.ReactNode;
  titleHeader: React.ReactNode;
  description?: React.ReactNode;
};

export function FormHead({ sx, icon, titleHeader, description, ...other }: FormHeadProps) {
  return (
    <>
      {icon && (
        <Box component="span" display="inline-flex" sx={{ mx: 'auto', mb: 3 }}>
          {icon}
        </Box>
      )}

      <Box
        gap={1.5}
        display="flex"
        flexDirection="column"
        sx={{ mb: 5, textAlign: 'center', whiteSpace: 'pre-line', ...sx }}
        {...other}
      >
        {titleHeader}

        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        )}
      </Box>
    </>
  );
}
