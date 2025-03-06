import {
  Box,
  Breakpoint,
  Button,
  ButtonProps,
  Typography,
  useMediaQuery,
  useTheme,
} from '@mui/material';

import { RouterLink } from 'src/routes/components';
import { paths } from 'src/routes/paths';

// ----------------------------------------------------------------------

export function LoginButton({ sx, ...other }: ButtonProps) {
  const theme = useTheme();
  const layoutQuery: Breakpoint = 'sm';

  return (
    <Button
      component={RouterLink}
      href={paths.auth.jwt.signIn}
      variant="contained"
      sx={{ pl: 2, pr: 2, backgroundColor: '#E1F1E8', color: '#30CB70' }}
      size={useMediaQuery(theme.breakpoints.down(layoutQuery)) ? 'small' : 'medium'}
      startIcon={
        <Box width={{ xs: 6, sm: 10, lg: 12 }}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="100%"
            height="100%"
            viewBox="0 0 15 18"
            fill="none"
          >
            <path
              d="M7.54318 11.8574C3.57938 11.8574 0.193848 12.4697 0.193848 14.9171C0.193848 17.3663 3.55785 17.9997 7.54318 17.9997C11.507 17.9997 14.8925 17.3874 14.8925 14.9401C14.8925 12.4908 11.5285 11.8574 7.54318 11.8574Z"
              fill="#30CB70"
            />
            <path
              d="M7.5432 9.52483C10.2428 9.52483 12.4062 7.40618 12.4062 4.76241C12.4062 2.11865 10.2428 0 7.5432 0C4.84457 0 2.68018 2.11865 2.68018 4.76241C2.68018 7.40618 4.84457 9.52483 7.5432 9.52483Z"
              fill="#30CB70"
            />
          </svg>
        </Box>
      }
    >
      <Typography variant="body2" fontSize={{ xs: 10, lg: 12 }} width="max-content">
        Se connecter
      </Typography>
    </Button>
  );
}
