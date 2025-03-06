import { ReactNode } from 'react';
import {
  Avatar,
  Box,
  BoxProps,
  Button,
  Card,
  Divider,
  Link,
  ListItemText,
  Stack,
  styled,
  Typography,
} from '@mui/material';
import { CONFIG } from 'src/config-global';
import { Image } from 'src/components/image';
import { useTheme } from '@mui/material/styles';
import { Iconify } from 'src/components/iconify';
import { RouterLink } from 'src/routes/components';
import { Label } from 'src/components/label';
import { AnalyticIcon, CalendarIcon, GraduateHateIcon, NotificationIcon } from './home-icon';
import { ModuleItemProps } from '../home-types';

const BoxInfoWrapper = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  opacity: 0.6,
  margin: 'auto',
  p: 1,
});

export function AnalyticsBox({ sx, ...other }: BoxProps) {
  return (
    <Box
      sx={{
        ...sx,
        borderRadius: 1,
        border: '0.482px solid #D9D9D9',
        background: 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(5.777959823608398px)',
        gap: 1,
        display: 'flex',
        pr: 1,
      }}
    >
      <Box component="svg" width={45} height={45}>
        <AnalyticIcon />
      </Box>
      <Box display="-ms-grid" padding={0.5} margin="auto">
        <Typography variant="subtitle1" fontSize={{ xs: 10, md: 12 }} align="left">
          Analytique
        </Typography>
        <Typography variant="body2" fontSize={{ xs: 8, md: 10 }} align="left" width="max-content">
          Progression des cours
        </Typography>
      </Box>
    </Box>
  );
}

export function StudentsBox({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        ...sx,
        borderRadius: 1,
        border: '0.482px solid #D9D9D9',
        background: 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(5.777959823608398px)',
        gap: 0.5,
        width: 'auto',
        display: 'flex',
        pl: 0.7,
        pr: 5,
      }}
    >
      <Box
        component="svg"
        sx={{
          width: 25,
          height: 25,
          borderRadius: 0.5,
          background: '#004B86',
          margin: 'auto',
        }}
      >
        <CalendarIcon />
      </Box>
      <Box display="-ms-grid" padding={0.5} margin="auto">
        <Typography variant="subtitle1" fontSize={{ xs: 10, md: 12 }} align="left">
          250k
        </Typography>
        <Typography variant="body2" fontSize={{ xs: 8, md: 10 }} align="left" width="max-content">
          Apprenants
        </Typography>
      </Box>
    </Box>
  );
}

export function NotificationBox({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  return (
    <Box
      component="section"
      sx={{
        ...sx,
        borderRadius: 1,
        border: '0.482px solid #D9D9D9',
        background: 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(5.777959823608398px)',
        gap: 0.5,
        width: 'auto',
        display: 'flex',
        p: 0.2,
      }}
    >
      <Box width={30} height={25} component="section" p={1}>
        <Box
          width={26}
          height={24}
          component="svg"
          sx={{ background: '#30CB70', p: 0.4, borderRadius: 0.8 }}
        >
          <NotificationIcon />
        </Box>
      </Box>
      <Box display="-ms-grid" padding={0.5} margin="auto">
        <Typography variant="subtitle1" fontSize={{ xs: 10, md: 12 }} align="left">
          Notification
        </Typography>
        <Typography
          variant="body2"
          fontSize={{ xs: 8, md: 10 }}
          align="left"
          sx={{
            minWidth: 90,
            [theme.breakpoints.up('sm')]: {
              minWidth: 150,
              width: '-webkit-fill-available',
            },
          }}
        >
          Votre emploi du temps de la semaine
        </Typography>
      </Box>
    </Box>
  );
}

export function CoursesBox({ sx, ...other }: BoxProps) {
  return (
    <Box
      component="section"
      sx={{
        ...sx,
        borderRadius: 1,
        border: '0.482px solid #D9D9D9',
        background: 'rgba(255, 255, 255, 0.80)',
        backdropFilter: 'blur(5.777959823608398px)',
        gap: 0.5,
        width: 'auto',
        display: 'grid',
        p: 0.2,
      }}
    >
      <Box sx={{ display: 'flex' }}>
        <Box width={{ xs: 35, md: 45 }} height="auto" pt={0.5}>
          <Image alt="teacher" src={`${CONFIG.assetsDir}/assets/images/home/teacher.svg`} />
        </Box>
        <Box display="-ms-grid" padding={0.5} margin="auto">
          <Typography variant="subtitle1" fontSize={{ xs: 8, md: 12 }} align="left">
            Cours de sciences
          </Typography>
          <Typography variant="body2" fontSize={{ xs: 7, md: 10 }} align="left" width="max-content">
            Aujourd’hui à 08h00
          </Typography>
        </Box>
      </Box>
      <Box margin="auto" pb={1}>
        <Typography
          variant="body2"
          fontSize={{ xs: 8, md: 12 }}
          align="center"
          sx={{
            backgroundColor: '#30CB70',
            color: '#FFF',
            width: 'fit-content',
            p: 0.5,
            borderRadius: 0.5,
          }}
        >
          Joindre maintenant
        </Typography>
      </Box>
    </Box>
  );
}

export function AssitanceCustomerBox({ sx, ...other }: BoxProps) {
  return (
    <BoxInfoWrapper sx={{ ...sx }}>
      <Box component="svg" width={{ xs: 30, md: 30 }} height={40}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M16.0003 8.69466V16.6947H22.0003M29.3337 16.6947C29.3337 24.0585 23.3641 30.028 16.0003 30.028C8.63653 30.028 2.66699 24.0585 2.66699 16.6947C2.66699 9.33086 8.63653 3.36133 16.0003 3.36133C23.3641 3.36133 29.3337 9.33086 29.3337 16.6947Z"
            stroke="#004B86"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Typography
        variant="body2"
        fontSize={{ xs: 10, sm: 12, md: 16 }}
        fontFamily="Public Sans"
        fontStyle="normal"
        fontWeight="600"
        color="#004B86"
      >
        24/7 Assistance client
      </Typography>
    </BoxInfoWrapper>
  );
}

export function CommissionBox({ sx, ...other }: BoxProps) {
  return (
    <BoxInfoWrapper sx={{ ...sx }}>
      <Box component="svg" width={{ xs: 30, md: 30 }} height={20}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 29 19"
          fill="none"
        >
          <path
            d="M13 7.93786H15.6667C16.3739 7.93786 17.0522 7.65691 17.5523 7.15681C18.0524 6.65672 18.3333 5.97844 18.3333 5.2712C18.3333 4.56395 18.0524 3.88568 17.5523 3.38558C17.0522 2.88548 16.3739 2.60453 15.6667 2.60453H11.6667C10.8667 2.60453 10.2 2.8712 9.8 3.40453L2.33333 10.6045M7.66667 15.9379L9.8 14.0712C10.2 13.5379 10.8667 13.2712 11.6667 13.2712H17C18.4667 13.2712 19.8 12.7379 20.7333 11.6712L26.8667 5.80453C27.3812 5.3183 27.6815 4.64759 27.7015 3.93995C27.7215 3.23232 27.4596 2.54572 26.9733 2.0312C26.4871 1.51668 25.8164 1.21638 25.1088 1.19638C24.4011 1.17638 23.7145 1.4383 23.2 1.92453L17.6 7.12453M1 9.2712L9 17.2712"
            stroke="#004B86"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </Box>
      <Typography
        variant="body2"
        fontSize={{ xs: 10, sm: 12, md: 16 }}
        fontFamily="Public Sans"
        fontStyle="normal"
        fontWeight="600"
        color="#004B86"
      >
        Aucune commission
      </Typography>
    </BoxInfoWrapper>
  );
}

export function FreeTrialBox({ sx, ...other }: BoxProps) {
  return (
    <BoxInfoWrapper sx={{ ...sx }}>
      <Box component="svg" width={35} height={30}>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="100%"
          height="100%"
          viewBox="0 0 32 33"
          fill="none"
        >
          <path
            d="M5.31853 20.2432L3.29188 18.2165C2.46521 17.3898 2.46521 16.0298 3.29188 15.2032L5.31853 13.1765C5.66519 12.8298 5.9452 12.1498 5.9452 11.6698V8.80311C5.9452 7.62977 6.9052 6.6698 8.07854 6.6698H10.9452C11.4252 6.6698 12.1052 6.38984 12.4519 6.04318L14.4785 4.01648C15.3052 3.18982 16.6652 3.18982 17.4919 4.01648L19.5186 6.04318C19.8652 6.38984 20.5452 6.6698 21.0252 6.6698H23.8919C25.0652 6.6698 26.0252 7.62977 26.0252 8.80311V11.6698C26.0252 12.1498 26.3052 12.8298 26.6519 13.1765L28.6786 15.2032C29.5052 16.0298 29.5052 17.3898 28.6786 18.2165L26.6519 20.2432C26.3052 20.5899 26.0252 21.2699 26.0252 21.7499V24.6164C26.0252 25.7898 25.0652 26.7499 23.8919 26.7499H21.0252C20.5452 26.7499 19.8652 27.0298 19.5186 27.3765L17.4919 29.4032C16.6652 30.2299 15.3052 30.2299 14.4785 29.4032L12.4519 27.3765C12.1052 27.0298 11.4252 26.7499 10.9452 26.7499H8.07854C6.9052 26.7499 5.9452 25.7898 5.9452 24.6164V21.7499C5.9452 21.2565 5.66519 20.5765 5.31853 20.2432Z"
            stroke="#004B86"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="16"
            y="14"
            fill="#004B86"
            fontSize="6"
            textAnchor="middle"
            fontFamily="Arial, sans-serif"
          >
            <tspan x="16" dy="0">
              Free
            </tspan>
            <tspan x="16" dy="6">
              Trial
            </tspan>
          </text>
        </svg>
      </Box>
      <Typography
        variant="body2"
        fontSize={{ xs: 10, sm: 12, md: 16 }}
        fontFamily="Public Sans"
        fontStyle="normal"
        fontWeight="600"
        color="#004B86"
      >
        Essai gratuit de 9 mois
      </Typography>
    </BoxInfoWrapper>
  );
}

export function ModuleItem({ module, sx, ...other }: ModuleItemProps) {
  return (
    <>
      <Card sx={{ maxWidth: 250, height: '100%', alignContent: 'space-around' }}>
        <Stack sx={{ p: 3, pb: 2 }}>
          <Avatar
            alt="test"
            src={module.logo ?? `${CONFIG.assetsDir}/assets/images/mock/company/company-1.webp`}
            variant="rounded"
            sx={{ width: 48, height: 48, mb: 2 }}
          />

          <ListItemText
            sx={{ mb: 1 }}
            primary={
              <Link component={RouterLink} href="#" color="inherit">
                {module.title}
              </Link>
            }
            primaryTypographyProps={{ typography: 'subtitle1' }}
            secondaryTypographyProps={{
              mt: 1,
              component: 'span',
              typography: 'caption',
              color: 'text.disabled',
            }}
          />

          <Stack
            spacing={0.5}
            direction="row"
            alignItems="center"
            sx={{ color: 'primary.main', typography: 'caption' }}
          >
            <Iconify width={16} icon="solar:home-broken" />
            {module.numberSchoolUsed} Etablissements
          </Stack>
        </Stack>

        <Divider sx={{ borderStyle: 'dashed' }} />
        <Box rowGap={1.5} sx={{ p: 1 }}>
          <Stack
            spacing={0.5}
            flexShrink={0}
            direction="row"
            alignItems="center"
            sx={{ color: 'text.disabled' }}
          >
            <Typography variant="caption">{module.description}</Typography>
          </Stack>
        </Box>
        <Stack p={1} direction="row">
          {module.numberSchoolUsed > 30 ? <Label color="info">Populaire</Label> : null}
          <Button variant="contained" size="small" sx={{ marginLeft: 'auto' }}>
            Voir
          </Button>
        </Stack>
      </Card>
    </>
  );
}
/** Box Statistic */
export type StatisticBoxProps = BoxProps & {
  data?: {
    title?: string;
    subTitle?: string;
    icon?: ReactNode;
  };
};
export function StatisticBox({ data, sx, ...other }: StatisticBoxProps) {
  return (
    <Box display="-ms-flexbox" alignItems="center" textAlign="center" maxWidth={100}>
      <Box width={40} margin="auto">
        {data?.icon}
      </Box>
      <Typography variant="h4">{data?.title}</Typography>
      <Typography variant="body2" fontFamily="Public Sans" fontStyle="normal" lineHeight={1}>
        {data?.subTitle}
      </Typography>
    </Box>
  );
}
