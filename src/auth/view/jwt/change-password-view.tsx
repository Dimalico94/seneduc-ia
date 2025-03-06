import { z as zod } from 'zod';
import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';

import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import InputAdornment from '@mui/material/InputAdornment';
import { LoadingButton } from '@mui/lab';
import { Alert, Typography } from '@mui/material';

import { Iconify } from 'src/components/iconify';
import { useRouter } from 'src/routes/hooks';
import { useBoolean } from 'src/hooks/use-boolean';
import { Form, Field } from 'src/components/hook-form';
import { UpdatePassword } from '../../context/jwt';  // Fonction pour mettre à jour le mot de passe
import { FormHead } from '../../components/form-head';

export type ChangePasswordSchemaType = zod.infer<typeof ChangePasswordSchema>;

export const ChangePasswordSchema = zod
  .object({
    password: zod
      .string()
      .min(1, { message: 'Le mot de passe est requis !' })
      .min(6, { message: 'Le mot de passe doit comporter au moins 6 caractères !' }),
    confirmPassword: zod
      .string()
      .min(1, { message: 'Le mot de passe est requis !' })
      .min(6, { message: 'Le mot de passe doit comporter au moins 6 caractères !' }),
  })
  .refine((data) => data.password === data.confirmPassword, {
    message: 'Les mots de passe ne correspondent pas !',
    path: ['confirmPassword'],
  });

export function JwtChangePasswordView() {
  const router = useRouter();
  const password = useBoolean();
  const confirmPassword = useBoolean();
  
  const [errorMsg, setErrorMsg] = useState('');

  const defaultValues = {
    password: '',
    confirmPassword: '',
  };

  const methods = useForm<ChangePasswordSchemaType>({
    resolver: zodResolver(ChangePasswordSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      // Appel à la fonction updatePassword avec seulement le mot de passe et la confirmation
      await UpdatePassword({
        newPassword: data.password,  // Nouveau mot de passe
        confirmPassword: data.confirmPassword,  // Confirmation du mot de passe
      });
      router.push('/dashboard');  // Rediriger après la mise à jour
    } catch (error) {
      console.error(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });
  

  return (
    <>
      <FormHead
        titleHeader={<Typography variant="h3" textAlign="center">Changer votre mot de passe</Typography>}
        description={null}
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      />

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        <Box gap={3} display="flex" flexDirection="column">
          <Field.Text
            name="password"
            label="Mot de passe"
            placeholder="6+ caractères"
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
            label="Confirmer le mot de passe"
            placeholder="6+ caractères"
            type={confirmPassword.value ? 'text' : 'password'}
            InputProps={{
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton onClick={confirmPassword.onToggle} edge="end">
                    <Iconify icon={confirmPassword.value ? 'solar:eye-bold' : 'solar:eye-closed-bold'} />
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
            loadingIndicator="Modification en cours..."
          >
            Modifier le mot de passe
          </LoadingButton>
        </Box>
      </Form>
    </>
  );
}
