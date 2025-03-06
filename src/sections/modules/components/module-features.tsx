import {
  Box,
  Button,
  Card,
  CardProps,
  Stack,
  StackProps,
  Typography,
  useTheme,
} from '@mui/material';
import { varAlpha } from 'src/theme/styles';
import { AnimateBorder } from 'src/components/animate';
import { RouterLink } from 'src/routes/components';
import { ModuleProps } from '../module-type';

// --------------------------
// Props
// --------------------------
type ModuleFeaturesProps = ModuleProps & StackProps;

export function ModuleFeatures({ module, sx }: ModuleFeaturesProps) {
  const theme = useTheme();
  // --------------------------
  // Rendered
  // --------------------------
  return (
    <Stack
      sx={{
        gap: 2,
        borderRadius: 1.5,
        position: 'relative',
        flexDirection: 'row',
        ...sx,
      }}
    >
      <Card sx={{ p: 2, width: '100%' }}>
        <Stack direction="column" gap={2}>
          {module?.features?.map((feature) => (
            <Box display="flex" key={feature.id}>
              <Box width={30} height={30} minWidth={20} minHeight={20}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="100%"
                  height="100%"
                  viewBox="0 0 30 30"
                  fill="none"
                >
                  <ellipse cx="13.5811" cy="14.9996" rx="13.5811" ry="14.1461" fill="#202020" />
                  <path
                    d="M20.4294 9.6783C20.3278 9.57167 20.207 9.48704 20.074 9.42929C19.9409 9.37153 19.7981 9.3418 19.6539 9.3418C19.5098 9.3418 19.367 9.37153 19.2339 9.42929C19.1008 9.48704 18.98 9.57167 18.8785 9.6783L10.7419 18.1648L7.32341 14.5927C7.21799 14.4866 7.09355 14.4032 6.95719 14.3473C6.82083 14.2913 6.67522 14.2638 6.52867 14.2665C6.38212 14.2691 6.23751 14.3018 6.10309 14.3627C5.96867 14.4235 5.84707 14.5114 5.74524 14.6212C5.6434 14.731 5.56333 14.8606 5.50959 15.0026C5.45586 15.1446 5.4295 15.2963 5.43204 15.449C5.43457 15.6016 5.46595 15.7522 5.52437 15.8922C5.58279 16.0323 5.66712 16.1589 5.77254 16.265L9.96645 20.6334C10.068 20.74 10.1888 20.8246 10.3219 20.8824C10.455 20.9401 10.5977 20.9699 10.7419 20.9699C10.8861 20.9699 11.0288 20.9401 11.1619 20.8824C11.295 20.8246 11.4158 20.74 11.5173 20.6334L20.4294 11.3506C20.5402 11.244 20.6287 11.1147 20.6892 10.9708C20.7497 10.8269 20.781 10.6715 20.781 10.5144C20.781 10.3573 20.7497 10.2019 20.6892 10.058C20.6287 9.91411 20.5402 9.78482 20.4294 9.6783Z"
                    fill="#F5F5F5"
                  />
                </svg>
              </Box>
              <Typography marginY="auto">{feature.title}</Typography>
            </Box>
          ))}
        </Stack>
        <Box paddingY={2} display="flex" justifyContent="center">
          <Button
            component={RouterLink}
            href="#"
            variant="contained"
            size="medium"
            sx={{
              bgcolor: '#FFF',
              color: '#30CB70',
              border: '1px solid var(--Secondary-Green, #30CB70)',
            }}
          >
            <Typography variant="body2">Voir les détails</Typography>
          </Button>
        </Box>
      </Card>
      <AnimateBorder
        animate={{
          width: '5px',
          color: theme.vars.palette.primary.dark,
          outline: `135deg, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.24)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
        }}
        sx={{ position: 'absolute', width: '100%', height: '100%' }}
      />
    </Stack>
  );
}
