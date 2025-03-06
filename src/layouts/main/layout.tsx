import { type Theme, type SxProps, type Breakpoint, useTheme } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';

import { paths } from 'src/routes/paths';
import { RouterLink } from 'src/routes/components';
import { Button, Typography } from '@mui/material';
import { useBoolean } from 'src/hooks/use-boolean';

import { Logo } from 'src/components/logo';
import { LogoMain } from 'src/components/logo/logo-main';

import { HomeFooter } from './footer';
import { NavMobile } from './nav/mobile/nav-mobile';
import { LayoutSection } from '../core/layout-section';
import { HeaderSection } from '../core/header-section';
import { SettingsButton } from '../components/settings-button';
import { CompactContent, Main } from '../simple';
import { NavDesktop } from './nav/desktop/nav-desktop';
import { MenuButton } from '../components/menu-button';
import { LoginButton } from '../components/home-button';
import { navData as mainNavData } from '../config-nav-main';
import { NavMainProps } from './types';
// ----------------------------------------------------------------------

export type MainLayoutProps = {
  sx?: SxProps<Theme>;
  children: React.ReactNode;
  header?: {
    sx?: SxProps<Theme>;
  };
  content?: {
    compact?: boolean;
  };
  data?: {
    nav?: NavMainProps['data'];
  };
};

export function MainLayout({ sx, data, children, header, content }: MainLayoutProps) {
  const theme = useTheme();
  const layoutQuery: Breakpoint = 'md';
  const mobileNavOpen = useBoolean();

  const navData = data?.nav ?? mainNavData;
  return (
    <LayoutSection
      /** **************************************
       * Header
       *************************************** */
      headerSection={
        <HeaderSection
          layoutQuery={layoutQuery}
          slotProps={{ container: { maxWidth: false } }}
          sx={header?.sx}
          slots={{
            topArea: (
              <Alert severity="info" sx={{ display: 'none', borderRadius: 0 }}>
                This is an info Alert.
              </Alert>
            ),
            leftArea: (
              <>
                {/* -- Nav mobile -- */}
                <MenuButton
                  onClick={mobileNavOpen.onTrue}
                  sx={{
                    ml: -1,
                    [theme.breakpoints.up(layoutQuery)]: { display: 'none' },
                  }}
                />
                <NavMobile
                  data={navData}
                  open={mobileNavOpen.value}
                  onClose={mobileNavOpen.onFalse}
                />
                <LogoMain width="none" height="none" />
              </>
            ),
            rightArea: (
              <Box
                display="flex"
                alignItems="center"
                sx={{
                  display: 'none',
                  [theme.breakpoints.up(layoutQuery)]: { gap: 5, display: 'flex' },
                }}
              >
                {/* -- Nav desktop -- */}
                <NavDesktop data={navData} sx={{ ...sx }} />
                {/* Login Button  */}
                <LoginButton />
                {/* -- Settings button -- */}
                {/* <SettingsButton /> */}
              </Box>
            ),
          }}
        />
      }
      /** **************************************
       * Footer
       *************************************** */
      footerSection={<HomeFooter layoutQuery={layoutQuery} />}
      /** **************************************
       * Style
       *************************************** */
      cssVars={{
        '--layout-simple-content-compact-width': '448px',
      }}
      sx={sx}
    >
      <Main>
        {content?.compact ? (
          <CompactContent layoutQuery={layoutQuery}>{children}</CompactContent>
        ) : (
          children
        )}
      </Main>
    </LayoutSection>
  );
}
