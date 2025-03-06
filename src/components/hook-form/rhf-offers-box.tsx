import { Controller, useFormContext } from 'react-hook-form';

import FormHelperText from '@mui/material/FormHelperText';
import { OfferBox } from './offers-box';

// ----------------------------------------------------------------------

type Props = {
  name: string;
};

// ----------------------------------------------------------------------

export function RHFOfferBox({ name, ...other }: Props) {
  const { control } = useFormContext();

  return (
    <Controller
      name={name}
      control={control}
      render={({ field, fieldState: { error } }) => (
        <OfferBox value={field.value} error={!!error} {...other} />
      )}
    />
  );
}
