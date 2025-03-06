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

import { useAuthContext } from '../../hooks';
import { FormHead } from '../../components/form-head';
import { signInWithPassword } from '../../context/jwt';

// ----------------------------------------------------------------------

export type SignInSchemaType = zod.infer<typeof SignInSchema>;

export const SignInSchema = zod.object({
  email: zod
    .string()
    .min(1, { message: "L'email est requis !" })
    .email({ message: "L'email doit être une adresse e-mail valide !" }),
  password: zod
    .string()
    .min(1, { message: 'Le mot de passe est requis !' })
    .min(6, { message: 'Le mot de passe doit contenir au moins 6 caractères !' }),
});

// ----------------------------------------------------------------------

export function JwtSignInView() {
  const router = useRouter();

  const { checkUserSession } = useAuthContext();

  const [errorMsg, setErrorMsg] = useState('');
  const [showDefaultAccess, setShowDefaultAccess] = useState(false);

  const password = useBoolean();

  const defaultValues = {
    email: '', // default email : demo@minimals.com
    password: '', // default password : @demo1
  };

  const methods = useForm<SignInSchemaType>({
    resolver: zodResolver(SignInSchema),
    defaultValues,
  });

  const {
    handleSubmit,
    formState: { isSubmitting },
  } = methods;

  const onSubmit = handleSubmit(async (data) => {
    try {
      await signInWithPassword({ email: data.email, password: data.password });
      await checkUserSession?.();

      router.refresh();
    } catch (error) {
      console.error(error);
      setErrorMsg(typeof error === 'string' ? error : error.message);
    }
  });

  const renderForm = (
    <Box gap={3} display="flex" flexDirection="column">
      <Field.Text name="email" label="Email" placeholder="Votre adresse email" />

      <Box gap={1.5} display="flex" flexDirection="column">
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
        <Link
          component={RouterLink}
          href={paths.auth.jwt.changePassword}
          variant="body2"
          color="#30CB70"
          sx={{ alignSelf: 'flex-end' }}
        >
          Mot de passe oublié ?
        </Link>
      </Box>

      <LoadingButton
        fullWidth
        color="success"
        size="large"
        type="submit"
        variant="contained"
        loading={isSubmitting}
        loadingIndicator="Sign in..."
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
            <Box color="#30CB70">Se connecter à</Box> SameEkole
          </Typography>
        }
        description={null}
        sx={{ textAlign: { xs: 'center', md: 'left' } }}
      />

      {!!showDefaultAccess && (
        <Alert severity="info" sx={{ mb: 3 }}>
          Utiliser cette <strong>{defaultValues.email}</strong>
          {' avec ce mot de passe : '}
          <strong>{defaultValues.password}</strong>
        </Alert>
      )}

      {!!errorMsg && (
        <Alert severity="error" sx={{ mb: 3 }}>
          {errorMsg}
        </Alert>
      )}

      <Form methods={methods} onSubmit={onSubmit}>
        {renderForm}
      </Form>
    </>
  );
}
