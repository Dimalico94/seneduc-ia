import { RHFAutocomplete } from './rhf-autocomplete';
import { RHFCheckbox } from './rhf-checkbox';
import { RHFOfferBox } from './rhf-offers-box';
import { RHFRadioGroup } from './rhf-radio-group';
import { RHFRadioGroupBox } from './rhf-radio-group-box';
import { RHFMultiSelect, RHFSelect } from './rhf-select';
import { RHFTextField } from './rhf-text-field';

// ----------------------------------------------------------------------

export const Field = {
  Text: RHFTextField,
  Select: RHFSelect,
  MultiSelect: RHFMultiSelect,
  Autocomplete: RHFAutocomplete,
  Checkbox: RHFCheckbox,
  RadioGroup: RHFRadioGroup,
  RadioGroupBox: RHFRadioGroupBox,
  OfferBox: RHFOfferBox,
};
