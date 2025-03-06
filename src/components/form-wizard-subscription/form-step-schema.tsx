import { z as zod } from 'zod';
import { isValidPhoneNumber } from 'react-phone-number-input';
import { schemaHelper } from '../hook-form/schema-helper';

// --------------------------
// Schema Validation Fields
// --------------------------

const StepOneSchema = zod.object({
  schoolName: zod.string().min(1, { message: "Le nom de l'établissement est obligatoire." }),
  schoolNumberStudent: zod.number(),
  schoolNumberTeacher: zod.number(),
  schoolLocalisation: zod.string(),
  schoolAdministratorName: zod
    .string()
    .min(1, { message: "Le nom et prénom du gestionnaire de l'établissement est obligatoire" }),
  schoolAdministratorRole: zod
    .string()
    .min(1, { message: "Le role du gestionnaire de l'établissement est obligatoire" }),
  schoolAdministratorPhone: schemaHelper.phoneNumber({ isValidPhoneNumber }),
  /* zod
    .string()
    .min(1, { message: "Le téléphone du gestionnaire de l'établissement est obligatoire" }), */
  schoolAdministratorEmail: zod
    .string()
    .min(1, { message: "L'adresse email obligatoire" })
    .email({ message: "L'adresse email est invalide !" }),
  multiSelectLevels: zod
    .string()
    .array()
    .min(1, { message: "Au moins un niveau d'enseignement est obligatoire" }),
});

const StepTwoSchema = zod.object({
  offer: zod.string(),
});

const StepThreeSchema = zod.object({
  modePayment: zod.string().min(1, { message: 'Veuillez choisir un mode de paiement !' }),
  methodPayment: zod.string().min(1, { message: 'Veuillez choisir une méthode de paiement !' }),
  recipientPayment: zod
    .string()
    .min(1, { message: 'Veuillez choisir le destinataire du paiement !' }),
});

const StepFourSchema = zod.object({
  conditionsUsed: schemaHelper.boolean({
    message: {
      required_error: "Veuillez lire et accepter les conditions d'utilisation pour continuer !",
    },
  }),
});

export { StepOneSchema, StepFourSchema, StepTwoSchema, StepThreeSchema };
