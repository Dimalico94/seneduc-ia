import Box from '@mui/material/Box';
import Step from '@mui/material/Step';
import Button from '@mui/material/Button';
import MuiStepper from '@mui/material/Stepper';
import StepLabel from '@mui/material/StepLabel';
import Typography from '@mui/material/Typography';
import {
  Card,
  CardHeader,
  Divider,
  IconButton,
  Link,
  Stack,
  StepConnector,
  styled,
  useTheme,
} from '@mui/material';

import { RouterLink } from 'src/routes/components';
import { Iconify } from 'src/components/iconify';
import { Field } from 'src/components/hook-form';
import { varAlpha } from 'src/theme/styles';
import {
  CheckBoxIcon,
  CheckDisabledBoxIcon,
} from 'src/sections/subscription/component/subscription-icon';
import { PlanFreeIcon, PlanStarterIcon, PlanPremiumIcon } from 'src/assets/icons';
import { AnimateBorder } from '../animate';
import {
  IconCardOfferProps,
  StepperProps,
  StepTwoProps,
  SubscriptionFormProps,
  SummaryItemProps,
} from './types';
import { Label } from '../label';

// --------------------------
// Private Attributes
// --------------------------

/* Mock Data */
const _mockDataOptions = [
  { value: 'level01', label: 'Petite enfance et pré-scolarisation' },
  { value: 'level02', label: 'Enseignement primaire' },
  { value: 'level03', label: 'Enseignement moyen' },
  { value: 'level04', label: 'Enseignement secondaire' },
  { value: 'level015', label: 'Enseignement Supérieure' },
];

const _mockDataModules = [
  { name: 'Gestion de l’établissement', _mockDataOffers: ['Basic', 'Standard', 'Premium'] },
  { name: 'Gestion des apprenant', _mockDataOffers: ['Basic', 'Standard', 'Premium'] },
  { name: 'Gestion des ressources humaines', _mockDataOffers: ['Basic', 'Standard', 'Premium'] },
  { name: 'Gestion des admissions', _mockDataOffers: ['Standard', 'Premium'] },
  { name: 'Gestion des finances', _mockDataOffers: ['Standard', 'Premium'] },
  { name: 'Gestion des notes', _mockDataOffers: ['Premium'] },
];

const _mockDataOffers = ['Basic', 'Standard', 'Premium'];

const _mockDataPaymentMode = [
  {
    value: 'month',
    label: 'Facturation mensuelle',
    description: '1500 FCFA',
    subDescription: 'Par Mois',
  },
  {
    value: 'annual',
    label: 'Facturation annuelle',
    description: '13500 FCFA',
    subDescription: 'Par Année',
  },
];

const _mockDataPaymentRecipient = [
  {
    value: 'scholar',
    label: 'Etablissement',
  },
  {
    value: 'parents',
    label: 'Parent d’éléves',
  },
];

const _mockDataPaymentMethod = [
  {
    value: 'paypal',
    label: 'Paypal',
  },
  {
    value: 'bank',
    label: 'Carte de crédit',
  },
  {
    value: 'wave',
    label: 'Wave',
  },
  {
    value: 'om',
    label: 'Orange Money',
  },
];

// Custom styled StepConnector to remove the border
const CustomStepConnector = styled(StepConnector)(({ theme }) => ({
  '& .MuiStepConnector-line': {
    display: 'none', // Hides the connector line
  },
}));

// --------------------------
// Private Methods
// --------------------------

/**
 * @description : Fonction générique pour récupérer le label en fonction du value et de la liste
 * @parameter : data: Array<{ value: string; label: string }>,  value: string
 * @return String
 */
const getLabelByValue = (
  data: Array<{ value: string; label: string }>,
  value: string
): string | undefined => {
  const item = data.find((entry) => entry.value === value);
  return item?.label;
};

// --------------------------
// Private RENDERED
// --------------------------

export function IconCardOffer({ offer }: IconCardOfferProps) {
  const isOfferBasic = offer === 'Basic';

  const isOfferStandard = offer === 'Standard';

  const isOfferPremium = offer === 'Premium';

  return (
    <Stack direction="row" justifyContent="space-between">
      {isOfferBasic && <PlanFreeIcon sx={{ width: 64 }} />}
      {isOfferStandard && <PlanStarterIcon sx={{ width: 64 }} />}
      {isOfferPremium && <PlanPremiumIcon sx={{ width: 64 }} />}

      {/* {isOfferStandard && <Label color="info">Populaire</Label>} */}
    </Stack>
  );
}

function SummaryItem({ label, value }: SummaryItemProps) {
  return (
    <Stack direction="row" justifyContent="space-between">
      <Box component="span" sx={{ color: 'text.secondary', flexShrink: 0 }} width="50%">
        {label}
      </Box>
      <Typography
        variant="h4"
        fontSize={{ xs: 12, sm: 14 }}
        width="-webkit-fill-available"
        textAlign="right"
        paddingX={{ xs: 1, sm: 5 }}
      >
        {value}
      </Typography>
    </Stack>
  );
}

const customLabel = (
  <Typography variant="body2">
    En continuant, vous acceptez nos&nbsp;
    <Box
      component="span"
      color="#30CB70"
      sx={{
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      }}
    >
      Conditions d&apos;utilisation
    </Box>
    &nbsp;et&nbsp;
    <Box
      component="span"
      color="#30CB70"
      sx={{
        textDecorationLine: 'underline',
        textDecorationStyle: 'solid',
      }}
    >
      Politique de confidentialité
    </Box>
    &nbsp;. Vos données ne seront utilisées que pour fournir et améliorer nos services, avec un
    contrôle total sur les paramètres de votre compte
  </Typography>
);

// --------------------------
// Public RENDERED
// --------------------------
export function Stepper({ steps, activeStep }: StepperProps) {
  return (
    <MuiStepper
      connector={<CustomStepConnector />}
      activeStep={activeStep}
      sx={{ mb: 5, bgcolor: 'rgba(48, 203, 112, 0.12)', p: 1, borderRadius: 1 }}
    >
      {steps.map((step, index) => (
        <Step key={step.label} sx={{ paddingX: { xs: 0, md: 1 } }}>
          <StepLabel
            StepIconComponent={({ active, completed }) => (
              <Box
                display="flex"
                alignItems="center"
                justifyContent="center"
                sx={{
                  borderRadius: 1,
                  color: 'text.disabled',
                  typography: 'subtitle2',
                  bgcolor: 'action.disabledBackground',
                  ...(active && { bgcolor: 'primary.main', color: 'primary.contrastText' }),
                  ...(completed && { bgcolor: 'primary.main', color: 'primary.contrastText' }),
                  px: { xs: 2, md: 3 },
                  py: 1,
                }}
              >
                {/* {completed ? (
                  <Iconify width={14} icon="mingcute:check-fill" />
                ) : ( */}
                <Box>
                  <Iconify
                    width={14}
                    icon={step?.iconName ?? ''}
                    sx={{ display: { xs: 'block', md: 'none' } }}
                  />
                  <Box sx={{ typography: 'subtitle2', display: { xs: 'none', md: 'block' } }}>
                    {step.label}
                  </Box>
                </Box>
                {/*  )} */}
              </Box>
            )}
          />
        </Step>
      ))}
    </MuiStepper>
  );
}

// ----------------------------------------------------------------------

export function StepOne() {
  return (
    <>
      <Typography variant="h4" p={1} textAlign="center">
        Évaluation des besoins
      </Typography>
      <Divider />
      <Stack gap={2}>
        <Typography variant="h5" py={1}>
          Informations sur l’établissement
        </Typography>
        <Field.Text
          name="stepOne.schoolName"
          label="Nom de l'établissement"
          placeholder="Nom de l établissement scolaire"
        />
        <Field.MultiSelect
          chip
          checkbox
          name="stepOne.multiSelectLevels"
          label="Niveau(x) d'enseignement"
          options={_mockDataOptions}
        />

        <Field.Text
          name="stepOne.schoolNumberStudent"
          type="number"
          label="Nombre d'apprenants"
          placeholder="700"
        />
        <Field.Text
          name="stepOne.schoolNumberTeacher"
          label="Nombre d'enseignants"
          type="number"
          placeholder="30"
        />
        <Field.Text
          name="stepOne.schoolLocalisation"
          label="Emplacement de l'établissement"
          placeholder="Thies"
        />
      </Stack>
      <Stack gap={2}>
        <Typography variant="h5" py={2}>
          Informations sur le gestionnaire
        </Typography>
        <Field.Text
          name="stepOne.schoolAdministratorName"
          label="Nom du gestionnaire"
          placeholder="Nom et prénom"
        />
        <Field.Text
          name="stepOne.schoolAdministratorRole"
          label="Rôle"
          placeholder="Directeur Générale"
        />
        <Field.Text
          name="stepOne.schoolAdministratorEmail"
          label="Email"
          placeholder="toto@gmail.com"
        />
        <Field.Text
          name="stepOne.schoolAdministratorPhone"
          label="Numéro de téléphone"
          placeholder="+221770000000"
        />
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

export function StepTwo({ currentOffer, displayErroMessage, selectOffer, ...sx }: StepTwoProps) {
  const theme = useTheme();
  return (
    <Box>
      <Typography variant="h4" p={1} textAlign="center">
        Sélectionnez votre forfait
      </Typography>
      <Box py={2}>
        <Divider />
      </Box>

      {/* Desktop */}
      <Box pb={10} sx={{ display: { xs: 'none', md: 'block' } }}>
        <Box position="relative" display="flex" py={2}>
          <Stack gap={2} width="100%">
            <Box
              width="100%"
              height={70}
              bgcolor="rgba(48, 203, 112, 0.12)"
              border="1px solid rgba(217, 217, 217, 0.80)"
              borderRadius={1}
              py={2}
              px={1}
            >
              <Typography variant="body1" color="black" textAlign="left">
                Détails du forfait
              </Typography>
            </Box>

            {_mockDataModules.map((item, index) => (
              <Box
                key={item.name}
                width="100%"
                height={70}
                bgcolor="rgba(48, 203, 112, 0.12)"
                border="1px solid rgba(217, 217, 217, 0.80)"
                borderRadius={1}
                py={2}
                px={1}
              >
                <Typography variant="body1" color="black" textAlign="left">
                  {item.name}
                </Typography>
              </Box>
            ))}
          </Stack>
          <Box
            display="flex"
            gap={2}
            position="absolute"
            ml={35}
            width="-webkit-fill-available"
            justifyContent="space-around"
          >
            {_mockDataOffers.map((offer) => (
              <Box key={offer}>
                <Button
                  sx={{ padding: 'inherit' }}
                  onClick={() => {
                    selectOffer(offer);
                  }}
                >
                  <Stack
                    gap={2}
                    bgcolor="#FFF"
                    border="1px solid rgba(217, 217, 217, 0.80)"
                    borderRadius={1}
                    px={{ md: 3, lg: 5 }}
                    textAlign="center"
                    sx={{
                      '&:hover': {
                        bgcolor: 'background.paper',
                        boxShadow: () => theme.customShadows.z20,
                      },
                    }}
                  >
                    <Box py={2} px={1} border="1px solid #FFF" height={70}>
                      <Typography variant="body1">{offer}</Typography>
                    </Box>
                    {_mockDataModules.map((item) => (
                      <Box key={item.name} py={2} border="1px solid #FFF" width="auto" height={70}>
                        {item._mockDataOffers.includes(offer) ? (
                          <CheckBoxIcon />
                        ) : (
                          <CheckDisabledBoxIcon />
                        )}
                      </Box>
                    ))}
                    <Box py={2} border="1px solid #FFF">
                      <Button
                        component={RouterLink}
                        href="#"
                        variant="contained"
                        size="large"
                        sx={{
                          bgcolor: 'rgba(48, 203, 112, 0.10)',
                          color: '#30CB70',
                        }}
                      >
                        <Typography variant="body2">Souscrire</Typography>
                      </Button>
                    </Box>
                  </Stack>
                  {currentOffer === offer ? (
                    <AnimateBorder
                      animate={{
                        width: '5px',
                        color: theme.vars.palette.primary.dark,
                        outline: `135deg, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.24)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
                      }}
                      sx={{ position: 'absolute', width: '100%', height: '100%' }}
                    />
                  ) : null}
                </Button>
              </Box>
            ))}
          </Box>
        </Box>
      </Box>
      {/* Mobile */}
      <Box display={{ xs: 'block', md: 'none' }}>
        <Stack gap={2}>
          {_mockDataOffers.map((offer) => (
            <Button
              key={offer}
              sx={{ padding: 'inherit' }}
              onClick={() => {
                selectOffer(offer);
              }}
            >
              <Stack
                spacing={5}
                sx={{
                  width: '100%',
                  p: 5,
                  borderRadius: 2,
                  bgcolor: 'background.default',
                  boxShadow: theme.customShadows.card,
                  ...sx,
                }}
              >
                <Stack spacing={2}>
                  <Stack direction="row" spacing={2} alignItems="center">
                    <IconCardOffer offer={offer} />
                    <Typography variant="h4" sx={{ textTransform: 'capitalize' }}>
                      {offer}
                    </Typography>
                  </Stack>
                  <Divider sx={{ borderStyle: 'dashed' }} />
                  <Stack spacing={2}>
                    <Box component="span" sx={{ typography: 'overline' }} textAlign="left">
                      Détails Forfait
                    </Box>
                    {_mockDataModules
                      .filter((item) => item._mockDataOffers.includes(offer))
                      .map((item) => (
                        <Stack
                          key={item.name}
                          spacing={1}
                          direction="row"
                          alignItems="center"
                          textAlign="left"
                          sx={{ typography: 'body2' }}
                        >
                          <Iconify icon="eva:checkmark-fill" width={16} sx={{ mr: 1 }} />
                          {item.name}
                        </Stack>
                      ))}
                  </Stack>
                  <Button
                    component={RouterLink}
                    href="#"
                    variant="contained"
                    size="large"
                    sx={{
                      bgcolor: 'rgba(48, 203, 112, 0.10)',
                      color: '#30CB70',
                    }}
                  >
                    <Typography variant="body2">Souscrire</Typography>
                  </Button>
                </Stack>
              </Stack>
              {currentOffer === offer ? (
                <AnimateBorder
                  animate={{
                    width: '5px',
                    color: theme.vars.palette.primary.dark,
                    outline: `135deg, ${varAlpha(theme.vars.palette.warning.mainChannel, 0.24)}, ${varAlpha(theme.vars.palette.primary.mainChannel, 0.24)}`,
                  }}
                  sx={{ position: 'absolute', width: '100%', height: '100%' }}
                />
              ) : null}
            </Button>
          ))}
        </Stack>

        <Box>
          {!currentOffer && displayErroMessage ? (
            <Typography variant="body2" color="red" textAlign="center">
              Veuillez selectionner une offre !
            </Typography>
          ) : null}
        </Box>
      </Box>
    </Box>
  );
}

// ----------------------------------------------------------------------

export function StepThree() {
  return (
    <>
      <Typography variant="h2" p={2} textAlign="center">
        {' Mode de paiement'}
      </Typography>
      <Divider />
      <Stack gap={3} width="100%" px={1}>
        <Field.RadioGroupBox
          name="stepThree.modePayment"
          label="Mode de paiement préféré"
          options={_mockDataPaymentMode}
        />
        <Field.RadioGroupBox
          name="stepThree.recipientPayment"
          label="Destinataire du paiement"
          options={_mockDataPaymentRecipient}
        />
        <Field.RadioGroupBox
          name="stepThree.methodPayment"
          label="Méthode de paiement préférée"
          options={_mockDataPaymentMethod}
        />
      </Stack>
    </>
  );
}

// ----------------------------------------------------------------------

export function StepFour({ stepOne, stepTwo, stepThree }: SubscriptionFormProps) {
  return (
    <Box>
      <Typography variant="h2" p={2} textAlign="center">
        {' Résumé abonnement'}
      </Typography>
      <Card>
        <CardHeader
          title="Etablissement Scolaire"
          action={
            <IconButton>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          }
        />
        <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
          <SummaryItem label="Nom de l'établissement" value={stepOne.schoolName} />
          <SummaryItem label="Niveau(x) d'enseignement" value="Elémentaire" />
          <SummaryItem label="Nombre d'apprenants" value="700" />
          <SummaryItem label="Emplacement de l'établissement" value={stepOne.schoolLocalisation} />
        </Stack>
        <CardHeader
          title="Administrateur Etablissement"
          action={
            <IconButton>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          }
        />
        <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
          <SummaryItem label="Prénom et Nom" value={stepOne.schoolAdministratorName} />
          <SummaryItem label="Adresse Email" value={stepOne.schoolAdministratorEmail} />
          <SummaryItem label="Téléphone" value={stepOne.schoolAdministratorPhone} />
          <SummaryItem label="Role" value={stepOne.schoolAdministratorRole} />
        </Stack>
        <CardHeader
          title="Forfait"
          action={
            <IconButton>
              <Iconify icon="solar:pen-bold" />
            </IconButton>
          }
        />
        <Stack spacing={1.5} sx={{ p: 3, typography: 'body2' }}>
          <SummaryItem label="Forfait choisi" value={stepTwo.offer} />
          <SummaryItem
            label="Mode de paiement"
            value={getLabelByValue(_mockDataPaymentMode, stepThree.modePayment)}
          />
          <SummaryItem
            label="Destinatire du paiement"
            value={getLabelByValue(_mockDataPaymentRecipient, stepThree.recipientPayment)}
          />
          <SummaryItem
            label="Méthode de paiement"
            value={getLabelByValue(_mockDataPaymentMethod, stepThree.methodPayment)}
          />
        </Stack>
      </Card>
      <Box px={1} py={3} display="flex">
        <Field.Checkbox name="stepFour.conditionsUsed" label={customLabel} />
      </Box>
    </Box>
  );
}
// ----------------------------------------------------------------------

export function StepCompleted({ onReset }: { onReset: () => void }) {
  return (
    <Box
      gap={3}
      display="flex"
      flex="1 1 auto"
      alignItems="center"
      flexDirection="column"
      justifyContent="center"
      padding={2}
      sx={{ borderRadius: 'inherit', bgcolor: 'background.neutral' }}
    >
      <Typography variant="subtitle1">
        Merci pour votre souscription à SenEduc ! <br />
        <br />
        Vous recevrez sous peu un e-mail de confirmation contenant les instructions pour activer
        votre compte.
        <br />
        <br /> Si vous ne recevez pas l&apos;e-mail dans les prochaines minutes, veuillez vérifier
        vos courriers indésirables ou contacter notre support à{' '}
        <Box component="span" color="#30CB70">
          support@seneduc.com.
        </Box>
        <br />
        <br />
        Nous sommes ravis de vous accueillir dans la communauté SenEduc et de vous accompagner dans
        la gestion de votre établissement scolaire ! 🚀
      </Typography>

      <Button
        variant="outlined"
        onClick={onReset}
        startIcon={<Iconify icon="material-symbols:thumb-up" />}
      >
        Terminer
      </Button>
    </Box>
  );
}
