import { BoxProps } from '@mui/material';

export type ModuleItemProps = {
  module: { title: string; description: string; numberSchoolUsed: number; logo?: string };
} & BoxProps;
