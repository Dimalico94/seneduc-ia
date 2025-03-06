import { BoxProps } from '@mui/material';

export type SubscriptionFormProps = {
  stepOne: {
    schoolName: string;
    schoolNumberStudent: number;
    schoolNumberTeacher: number;
    schoolLocalisation: string;
    schoolAdministratorName: string;
    schoolAdministratorRole: string;
    schoolAdministratorEmail: string;
    schoolAdministratorPhone: string;
    multiSelectLevels?: Array<string>;
  };
  stepTwo: { offer: string };
  stepThree: { modePayment: string; recipientPayment: string; methodPayment: string };
  stepFour?: { conditionsUsed: boolean };
};

export type StepperProps = {
  steps: Array<{
    label: string;
    iconName?: string;
  }>;
  activeStep: number;
  iconStep?: string;
};

export type StepTwoProps = BoxProps & {
  currentOffer: string;
  displayErroMessage?: Boolean;
  selectOffer: (param: string) => void;
};

export type IconCardOfferProps = {
  offer: string;
};

export type SummaryItemProps = {
  label: string;
  value: string | undefined;
};
