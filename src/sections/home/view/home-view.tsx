import { Stack } from '@mui/material';
import { HomePresentation } from 'src/sections/home/home-presentation';
import { HomeSchoolApp } from '../home-school';
import { HomeModules } from '../home-modules';
import { HomeGuide } from '../home-guide';
import { HomeStatistics } from '../home-statistics';
import { HomeComments } from '../home-comments';
import { HomeFaq } from '../home-faq';

export function HomeView() {
  return (
    <>
      <Stack spacing={10} pb={10} sx={{ position: 'relative', bgcolor: '#FAFAFA' }}>
        {/* Section Presentaion */}
        <HomePresentation />
        {/*  Section Presentation School App */}
        <HomeSchoolApp />
        {/* Section Presentation Modules */}
        <HomeModules />
        {/* Section Ultimate Guide */}
        <HomeGuide />
        {/* Section Statistics */}
        <HomeStatistics />
        {/* Section Comments */}
        <HomeComments />
        {/* Section FAQ */}
        <HomeFaq />
      </Stack>
    </>
  );
}
