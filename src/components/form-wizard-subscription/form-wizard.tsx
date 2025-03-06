import { z as zod } from 'zod';
import { useForm, useFormContext } from 'react-hook-form';
import { useState, useCallback } from 'react';
import { zodResolver } from '@hookform/resolvers/zod';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import LoadingButton from '@mui/lab/LoadingButton';
import { Form } from 'src/components/hook-form';
import { Stepper, StepOne, StepTwo, StepThree, StepCompleted, StepFour } from './form-steps';
import { StepFourSchema, StepOneSchema, StepThreeSchema, StepTwoSchema } from './form-step-schema';
import { SubscriptionFormProps } from './types';

// ----------------------------------------------------------------------
// --------------------------
// Private Attributes
// --------------------------
const STEPS = [
  { label: 'Evaluation besoins', iconName: 'material-symbols:add-business' },
  { label: 'Sélection forfaits', iconName: 'material-symbols:add-shopping-cart' },
  { label: 'Mode paiement', iconName: 'material-symbols:credit-card' },
  { label: 'Résumé', iconName: 'material-symbols:info' },
];

/* Schema Wizard Form */
const WizardSchema = zod.object({
  stepOne: StepOneSchema,
  stepTwo: StepTwoSchema,
  stepThree: StepThreeSchema,
  stepFour: StepFourSchema,
});

type WizardSchemaType = zod.infer<typeof WizardSchema>;

// ----------------------------------------------------------------------

const defaultValues: SubscriptionFormProps = {
  stepOne: {
    schoolName: '',
    schoolNumberStudent: 0,
    schoolNumberTeacher: 0,
    schoolLocalisation: '',
    schoolAdministratorName: '',
    schoolAdministratorRole: '',
    schoolAdministratorEmail: '',
    schoolAdministratorPhone: '',
    multiSelectLevels: [],
  },
  stepTwo: { offer: '' },
  stepThree: { modePayment: '', recipientPayment: '', methodPayment: '' },
  stepFour: { conditionsUsed: false },
};

export function FormWizardSubscription() {
  // --------------------------
  // Private Attributes
  // --------------------------

  const [activeStep, setActiveStep] = useState(0);
  const [currentoffer, setCurrentoffer] = useState('');
  const [stephasError, setStephasError] = useState(false);
  const [stepTwohasError, setStepTwohasError] = useState(false);

  const methods = useForm<WizardSchemaType>({
    mode: 'onChange',
    resolver: zodResolver(WizardSchema),
    defaultValues,
  });

  const {
    watch,
    reset,
    trigger,
    clearErrors,
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  // values of form
  const values = watch();

  // --------------------------
  // Private Methods
  // --------------------------

  const handleNext = useCallback(
    async (step?: 'stepOne' | 'stepTwo' | 'stepThree' | 'stepFour') => {
      const advanceStep = () => {
        setActiveStep((currentStep) => currentStep + 1);
        setStephasError(false);
        clearErrors();
      };

      if (step) {
        const isValid = await trigger(step);

        switch (step) {
          case 'stepOne':
          case 'stepThree':
          case 'stepFour':
            if (isValid) {
              advanceStep();
            } else {
              setStephasError(true);
            }
            break;

          case 'stepTwo':
            if (currentoffer) {
              advanceStep();
              setStepTwohasError(false);
            } else {
              setStepTwohasError(true);
              setStephasError(true);
            }
            break;

          default:
            break;
        }
      } else {
        setActiveStep((currentStep) => currentStep + 1);
      }
    },
    [trigger, clearErrors, currentoffer]
  );

  const handleBack = useCallback(() => {
    setActiveStep((currentStep) => currentStep - 1);
  }, []);

  const handleSelectOffer = useCallback((param: string) => {
    setCurrentoffer(param);
    setStephasError(false);
    defaultValues.stepTwo.offer = param;
  }, []);

  const handleReset = useCallback(() => {
    reset();
    setActiveStep(0);
  }, [reset]);

  const onSubmit = handleSubmit(async (data) => {
    try {
      await new Promise((resolve) => setTimeout(resolve, 1000));

      console.info('DATA', data);
      // redirect last step
      handleNext();
    } catch (error) {
      console.error(error);
    }
  });

  const completedStep = activeStep === STEPS.length;

  // --------------------------
  // RENDERED
  // --------------------------
  return (
    <Card sx={{ p: { xs: 1, sm: 5 }, width: 1, mx: 'auto' }}>
      <Form methods={methods} onSubmit={onSubmit}>
        <Stepper steps={STEPS} activeStep={activeStep} />

        <Box
          gap={3}
          display="flex"
          flexDirection="column"
          sx={{
            p: { xs: 1, sm: 3 },
            mb: 3,
            minHeight: 240,
            borderRadius: 1.5,
            border: (theme) => `dashed 1px ${stephasError ? 'red' : theme.vars.palette.divider}`,
          }}
        >
          {activeStep === 0 && <StepOne />}
          {activeStep === 1 && (
            <StepTwo
              selectOffer={handleSelectOffer}
              currentOffer={currentoffer}
              displayErroMessage={stepTwohasError}
            />
          )}
          {activeStep === 2 && <StepThree />}
          {activeStep === 3 && (
            <StepFour
              stepOne={values.stepOne}
              stepTwo={defaultValues.stepTwo}
              stepThree={values.stepThree}
            />
          )}
          {completedStep && <StepCompleted onReset={handleReset} />}
        </Box>

        {!completedStep && (
          <Box display="flex">
            {activeStep !== 0 && <Button onClick={handleBack}>Retour</Button>}

            <Box sx={{ flex: '1 1 auto' }} />

            {activeStep === 0 && (
              <Button type="submit" variant="contained" onClick={() => handleNext('stepOne')}>
                Suivant
              </Button>
            )}

            {activeStep === 1 && (
              <Button type="submit" variant="contained" onClick={() => handleNext('stepTwo')}>
                Suivant
              </Button>
            )}
            {activeStep === 2 && (
              <Button type="submit" variant="contained" onClick={() => handleNext('stepThree')}>
                Suivant
              </Button>
            )}

            {activeStep === STEPS.length - 1 && (
              <LoadingButton
                type="submit"
                variant="contained"
                sx={{ bgcolor: '#30CB70' }}
                loading={isSubmitting}
              >
                Finaliser abonnement
              </LoadingButton>
            )}
          </Box>
        )}
      </Form>
    </Card>
  );
}
