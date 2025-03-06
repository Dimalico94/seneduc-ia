import dayjs from 'dayjs';
import { z as zod } from 'zod';

// ----------------------------------------------------------------------

type InputProps = {
  message?: {
    required_error?: string;
    invalid_type_error?: string;
  };
  minFiles?: number;
  isValidPhoneNumber?: (text: string) => boolean;
};

export const schemaHelper = {
  /**
   * Phone number
   * defaultValue === ''
   */
  phoneNumber: (props?: InputProps) =>
    zod
      .string({
        required_error: props?.message?.required_error ?? 'Le numéro de téléphone est requis !',
        invalid_type_error: props?.message?.invalid_type_error ?? 'Numéro de téléphone invalide !',
      })
      .min(1, {
        message: props?.message?.required_error ?? 'Le numéro de téléphone est requis !',
      })
      .refine((data) => props?.isValidPhoneNumber?.(data), {
        message: props?.message?.invalid_type_error ?? 'Numéro de téléphone invalide !',
      }),
  /**
   * Date
   * defaultValue === null
   */
  date: (props?: InputProps) =>
    zod.coerce
      .date()
      .nullable()
      .transform((dateString, ctx) => {
        const date = dayjs(dateString).format();

        const stringToDate = zod.string().pipe(zod.coerce.date());

        if (!dateString) {
          ctx.addIssue({
            code: zod.ZodIssueCode.custom,
            message: props?.message?.required_error ?? 'La date est requise !',
          });
          return null;
        }

        if (!stringToDate.safeParse(date).success) {
          ctx.addIssue({
            code: zod.ZodIssueCode.invalid_date,
            message: props?.message?.invalid_type_error ?? 'Date invalide !',
          });
        }

        return date;
      })
      .pipe(zod.union([zod.number(), zod.string(), zod.date(), zod.null()])),
  /**
   * Editor
   * defaultValue === '' | <p></p>
   */
  editor: (props?: InputProps) =>
    zod.string().min(8, { message: props?.message?.required_error ?? 'Un éditeur est requis !' }),
  /**
   * Object
   * defaultValue === null
   */
  objectOrNull: <T>(props?: InputProps) =>
    zod.custom<T | null>().refine((data) => data !== null && data !== '', {
      message: props?.message?.required_error ?? 'Le champ est obligatoire !',
    }),
  /**
   * Boolean
   * defaultValue === false
   */
  boolean: (props?: InputProps) =>
    zod.coerce.boolean().refine((bool) => bool === true, {
      message: props?.message?.required_error ?? 'Un changement est nécessaire !',
    }),
  /**
   * File
   * defaultValue === '' || null
   */
  file: (props?: InputProps) =>
    zod.custom<File | string | null>().transform((data, ctx) => {
      const hasFile = data instanceof File || (typeof data === 'string' && !!data.length);

      if (!hasFile) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: props?.message?.required_error ?? 'Le fichier est requis !',
        });
        return null;
      }

      return data;
    }),
  /**
   * Files
   * defaultValue === []
   */
  files: (props?: InputProps) =>
    zod.array(zod.custom<File | string>()).transform((data, ctx) => {
      const minFiles = props?.minFiles ?? 2;

      if (!data.length) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: props?.message?.required_error ?? 'Les fichiers sont requis !',
        });
      } else if (data.length < minFiles) {
        ctx.addIssue({
          code: zod.ZodIssueCode.custom,
          message: `Doit avoir au moins ${minFiles} articles!`,
        });
      }

      return data;
    }),
};
