import type { RadioProps } from '@mui/material/Radio';
import type { Theme, SxProps } from '@mui/material/styles';
import type { FormLabelProps } from '@mui/material/FormLabel';
import type { RadioGroupProps } from '@mui/material/RadioGroup';
import type { FormHelperTextProps } from '@mui/material/FormHelperText';

import { Controller, useFormContext } from 'react-hook-form';

import Radio from '@mui/material/Radio';
import FormLabel from '@mui/material/FormLabel';
import RadioGroup from '@mui/material/RadioGroup';
import FormControl from '@mui/material/FormControl';
import FormHelperText from '@mui/material/FormHelperText';
import FormControlLabel from '@mui/material/FormControlLabel';
import { Box, Button, Grid, Stack, Typography } from '@mui/material';

// ----------------------------------------------------------------------

type Props = RadioGroupProps & {
  name: string;
  label?: string;
  helperText?: React.ReactNode;
  slotProps?: {
    wrap?: SxProps<Theme>;
    radio: RadioProps;
    formLabel: FormLabelProps;
    formHelperText: FormHelperTextProps;
  };
  options: {
    label: string;
    value: string;
    description?: string;
    subDescription?: string;
  }[];
};

export function RHFRadioGroupBox({ name, label, options, helperText, slotProps, ...other }: Props) {
  const { control } = useFormContext();

  const labelledby = `${name}-radio-buttons-group-label`;
  const ariaLabel = (val: string) => `Radio ${val}`;

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <FormControl
          component="fieldset"
          sx={{ width: '-webkit-fill-available', ...slotProps?.wrap }}
        >
          {label && (
            <FormLabel
              id={labelledby}
              component="legend"
              {...slotProps?.formLabel}
              sx={{
                mb: 1,
                typography: 'body2',
                ...slotProps?.formLabel.sx,
                color: error ? 'var(--palette-error-main)' : 'none',
              }}
            >
              {label}
            </FormLabel>
          )}

          <RadioGroup {...field} aria-labelledby={labelledby} {...other}>
            <Stack gap={2}>
              {options.map((option) => (
                <FormControlLabel
                  key={option.value}
                  value={option.value}
                  control={
                    <Box
                      key={option.value}
                      borderRadius={1}
                      border="1px solid rgba(217, 217, 217, 0.80)"
                      sx={{ width: '-webkit-fill-available' }}
                    >
                      <Button fullWidth>
                        <Grid container>
                          <Grid item xs={12} md={8} alignContent="center" justifyContent="start">
                            <Box display="flex">
                              {/* <Radio size="medium" value={option.value} /> */}
                              <Radio
                                value={option.value}
                                {...slotProps?.radio}
                                inputProps={{
                                  ...(!option.label && { 'aria-label': ariaLabel(option.label) }),
                                  ...slotProps?.radio?.inputProps,
                                }}
                              />
                              <Typography variant="h6" alignContent="center" textAlign="left">
                                {option.label}
                              </Typography>
                            </Box>
                          </Grid>
                          {option.description ? (
                            <Grid item xs={12} md={4}>
                              <Stack direction="column" p={2} sx={{ textAlign: 'right' }}>
                                <Typography
                                  variant="body1"
                                  fontFamily="sans-serif"
                                  fontSize={16}
                                  fontStyle="normal"
                                  fontWeight={600}
                                  letterSpacing="-1px"
                                >
                                  {option.description}
                                </Typography>
                                <Typography
                                  variant="body2"
                                  fontFamily="sans-serif"
                                  fontSize={12}
                                  fontStyle="normal"
                                  fontWeight={400}
                                  sx={{ opacity: 0.6 }}
                                >
                                  {option.subDescription}
                                </Typography>
                              </Stack>
                            </Grid>
                          ) : null}
                        </Grid>
                      </Button>
                    </Box>
                  }
                  label={null}
                />
              ))}
            </Stack>
          </RadioGroup>

          {(!!error || helperText) && (
            <FormHelperText error={!!error} sx={{ mx: 0 }} {...slotProps?.formHelperText}>
              {error ? error?.message : helperText}
            </FormHelperText>
          )}
        </FormControl>
      )}
    />
  );
}
