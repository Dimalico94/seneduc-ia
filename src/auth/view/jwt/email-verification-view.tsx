import { useState } from 'react';
import { LoadingButton } from '@mui/lab';
import { Alert, Box, TextField, Typography } from '@mui/material';

export function JwtEmailVerificationView({ onVerify }: { onVerify: (email: string) => void }) {
  const [email, setEmail] = useState('');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) {
      setErrorMsg('L\'email est requis');
      return;
    }

    try {
      await onVerify(email);
    } catch (error) {
      setErrorMsg('Erreur de vérification');
    }
  };

  return (
    <Box sx={{ maxWidth: 400, margin: 'auto' }}>
      <Typography variant="h5">
        Veuillez entrer l&apos;email valide
      </Typography>

      <form onSubmit={handleSubmit}>
        <TextField
          label="Email"
          variant="outlined"
          fullWidth
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          sx={{ mb: 2 }}
        />
        <LoadingButton
          fullWidth
          type="submit"
          variant="contained"
          color="primary"
        >
          Vérifier
        </LoadingButton>
      </form>
      {errorMsg && <Alert severity="error" sx={{ mt: 2 }}>{errorMsg}</Alert>}
    </Box>
  );
}
