import { Box, BoxProps, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { StatisticBox } from './components/home-box';
import { CourseIcon, MoneyIcon, PeopleIcon } from './components/home-icon';

const statisticsData = [
  { title: '375k', subTitle: 'Cours Programmé', icon: <CourseIcon /> },
  { title: '1k', subTitle: 'Personnes formées', icon: <PeopleIcon /> },
  { title: '30%', subTitle: 'Temps de gestion Economisés', icon: <CourseIcon /> },
  { title: '32%', subTitle: 'Réduction des coûts', icon: <MoneyIcon /> },
];

export function HomeStatistics({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  return (
    <Box
      component="section"
      width="100%"
      paddingY={2}
      alignItems="center"
      boxShadow="1.5px 1.5px 30px 0px rgba(0, 75, 134, 0.06)"
    >
      <Stack direction="row" spacing={{ xs: 2, md: 10, lg: 20 }} justifyContent="center">
        {statisticsData.map((item) => (
          <StatisticBox key={item.title} data={item} />
        ))}
      </Stack>
    </Box>
  );
}
