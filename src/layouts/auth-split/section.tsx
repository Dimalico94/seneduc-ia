import type { BoxProps } from '@mui/material/Box';
import type { Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import { useTheme } from '@mui/material/styles';
import Typography from '@mui/material/Typography';

import { RouterLink } from 'src/routes/components';

import { CONFIG } from 'src/config-global';
import { varAlpha, bgGradient } from 'src/theme/styles';
import { _socials } from 'src/_mock';
import { IconButton, Stack } from '@mui/material';
import { FacebookIcon, InstagramIcon, LinkedinIcon, TwitterIcon } from 'src/assets/icons';

// ----------------------------------------------------------------------

type SectionProps = BoxProps & {
  title?: string;
  imgUrl?: string;
  subtitle?: string;
  layoutQuery: Breakpoint;
};

export function Section({
  sx,
  layoutQuery,
  title = 'Bienvenue !',
  imgUrl = `${CONFIG.assetsDir}/assets/images/login/login-user.png`,
  subtitle = '',
  ...other
}: SectionProps) {
  const theme = useTheme();

  return (
    <Box
      sx={{
        ...bgGradient({
          color: `0deg, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.92)}, ${varAlpha(theme.vars.palette.background.defaultChannel, 0.92)}`,
          imgUrl: `${CONFIG.assetsDir}/assets/background/background-3-blur.webp`,
        }),
        px: 3,
        pb: 3,
        width: 1,
        maxWidth: 480,
        display: 'none',
        position: 'relative',
        pt: 'var(--layout-header-desktop-height)',
        [theme.breakpoints.up(layoutQuery)]: {
          gap: 8,
          display: 'flex',
          alignItems: 'center',
          flexDirection: 'column',
          justifyContent: 'center',
        },
        ...sx,
      }}
      {...other}
    >
      <div>
        <Typography variant="h3" sx={{ textAlign: 'center' }}>
          {title}
        </Typography>

        {subtitle && (
          <Typography sx={{ color: 'text.secondary', textAlign: 'center', mt: 2 }}>
            {subtitle}
          </Typography>
        )}
      </div>

      <Box component="img" alt="Dashboard illustration" src={imgUrl} height={250} />
      <Stack direction="row" my={2} justifyContent="center" gap={3}>
        {_socials.map((social) => (
          <IconButton key={social.label} color="inherit">
            {social.value === 'twitter' && <TwitterIcon />}
            {social.value === 'facebook' && <FacebookIcon />}
            {social.value === 'instagram' && <InstagramIcon />}
            {social.value === 'linkedin' && <LinkedinIcon />}
          </IconButton>
        ))}
      </Stack>
    </Box>
  );
}
