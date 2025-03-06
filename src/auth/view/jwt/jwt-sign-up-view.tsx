import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Alert from '@mui/material/Alert';
import IconButton from '@mui/material/IconButton';
import LoadingButton from '@mui/lab/LoadingButton';
import InputAdornment from '@mui/material/InputAdornment';
import { Typography } from '@mui/material';

import { paths } from 'src/routes/paths';
import { useRouter } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { useBoolean } from 'src/hooks/use-boolean';

import { Iconify } from 'src/components/iconify';
import { Form, Field } from 'src/components/hook-form';

import { signUp } from '../../context/jwt';
import { useAuthContext } from '../../hooks';
import { FormHead } from '../../components/form-head';
import { SignUpTerms } from '../../components/sign-up-terms';

// ----------------------------------------------------------------------

export type SignUpSchemaType = zod.infer<typeof SignUpSchema>;

export const SignUpSchema = zod
  .object({
    firstName: zod.string().min(1, { message: 'Le prénom est obligatoire !' }),
    lastName: zod.string().min(1, { message: 'Le nom est obligatoire !' }),
    email: zod
      .string()
      .min(1, { message: "L'e-mail est requis !" })
      .email({ message: "L'e-mail doit être une adresse e-mail valide !" }),
    password: zod
      .string()
      .min(1, { message: 'Le mot de passe est requis !' })
      .min(6, { message: 'Le mot de passe doit comporter au moins 6 caractères !' }),
    confirmPassword: zod
      .string()
      .min(1, { message: 'Le mot de passe est requis !' })
      .min(6, { message: 'Le mot de passe doit comporter au moins 6 caractères !' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas !',
    path: ['confirmPassword'],
  });

// ----------------------------------------------------------------------

export function JwtSignUpView() {
  const { checkUserSession } = useAuthContext();

  const router = useRouter();

  const password = useBoolean();
  const confirmPassword = useBoolean();

  const [errorMsg, setErrorMsg] = useState('');

  const defaultValues = {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    confirmPassword: '',
  };

  const methods = useForm<SignUpSchemaType>({
    resolver: zodResolver(SignUpSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signUp({
        email: data.email,
        password: data.password,
        confirmPassword: data.confirmPassword,
        firstName: data.firstName,
        lastName: data.lastName,
      });
      await checkUserSession?.();

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderForm = (
    <Box gap={3} display="flex" flexDirection="column">
      <Box display="flex" gap={{ xs: 3, sm: 2 }} flexDirection={{ xs: 'column', sm: 'row' }}>
        <Field.Text name="firstName" label="Prénom" />
        <Field.Text name="lastName" label="Nom" />
      </Box>

      <Field.Text name="email" label="Email" />

      <Field.Text
        name="password"
        label="Mot de passe"
        placeholder="6+ characters"
        type={password.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={password.onToggle} edge="end">
                <Iconify icon={password.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />
      <Field.Text
        name="confirmPassword"
        label="Confirmé Mot de passe"
        placeholder="6+ characters"
        type={confirmPassword.value ? 'text' : 'password'}
        InputProps={{
          endAdornment: (
            <InputAdornment position="end">
              <IconButton onClick={confirmPassword.onToggle} edge="end">
                <Iconify
                  icon={confirmPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'}
                />
              </IconButton>
            </InputAdornment>
          ),
        }}
      />

      <LoadingButton
        fullWidth
        color="success"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Création de compte..."
      >
        Se connecter
      </LoadingButton>
    </Box>
  );

  return (
    <>
      <FormHead
        titleHeader={
          <Typography variant="h3" textAlign="center">
            <Box color="#30CB70">Création compte à</Box> SameEkole
          </Typography>
        }
        description={null}
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      />

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>

      <SignUpTerms />
    </>
  );
}
