import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Typography from '@mui/material/Typography';
import { Grid, useTheme } from '@mui/material';

type FormData = {
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  subject: string;
  message: string;
};

// ----------------------------------------------------------------------

export function ContactForm() {
  const theme = useTheme();
  const [formData, setFormData] = useState<FormData>({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });

  const [errors, setErrors] = useState<Partial<FormData>>({});

  const handleChange = (field: keyof FormData) => (event: React.ChangeEvent<HTMLInputElement>) => {
    setFormData((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = () => {
    const newErrors: Partial<FormData> = {};

    if (!formData.firstName.trim()) newErrors.firstName = 'Le prénom est requis.';
    if (!formData.lastName.trim()) newErrors.lastName = 'Le nom est requis.';
    if (!formData.email.trim()) newErrors.email = 'L’e-mail est requis.';
    if (!formData.phone.trim()) newErrors.phone = 'Le numéro de téléphone est requis.';
    if (!formData.subject.trim()) newErrors.subject = 'Le titre du sujet est requis.';
    if (!formData.message.trim()) newErrors.message = 'Le message est requis.';

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      console.log('Form Data Submitted:', formData);
      alert('Merci de nous avoir contactés !');
      setFormData({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        subject: '',
        message: '',
      });
      setErrors({});
    }
  };

  return (
    <Box px={{ xs: 2, sm: 10 }}>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          gap: 3,
          py: 5,
          px: 2,
          backgroundColor: 'white',
          borderRadius: 2,
          boxShadow: 3,
          width: '100%',
          justifyContent: 'center',
        }}
      >
        <Typography
          variant="h4"
          sx={{ fontWeight: 'bold', color: 'primary.main', textAlign: 'center' }}
        >
          Envoyer un message
        </Typography>

        <Box
          component="form"
          sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 3,
            width: '100%',
          }}
        >
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Prénom"
                value={formData.firstName}
                onChange={handleChange('firstName')}
                error={Boolean(errors.firstName)}
                helperText={errors.firstName}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Nom"
                value={formData.lastName}
                onChange={handleChange('lastName')}
                error={Boolean(errors.lastName)}
                helperText={errors.lastName}
              />
            </Grid>

            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="E-mail"
                value={formData.email}
                onChange={handleChange('email')}
                error={Boolean(errors.email)}
                helperText={errors.email}
              />
            </Grid>
            <Grid item xs={12} sm={6}>
              <TextField
                fullWidth
                label="Téléphone"
                value={formData.phone}
                onChange={handleChange('phone')}
                error={Boolean(errors.phone)}
                helperText={errors.phone}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                label="Titre du sujet"
                value={formData.subject}
                onChange={handleChange('subject')}
                error={Boolean(errors.subject)}
                helperText={errors.subject}
                sx={{
                  width: '100%',
                  [theme.breakpoints.up('sm')]: {
                    width: '49%',
                  },
                }}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                fullWidth
                label="Message"
                multiline
                rows={4}
                value={formData.message}
                onChange={handleChange('message')}
                error={Boolean(errors.message)}
                helperText={errors.message}
              />
            </Grid>
          </Grid>
        </Box>

        <Button
          size="small" // Taille moyenne du bouton
          variant="contained"
          onClick={handleSubmit}
          sx={{
            alignSelf: 'flex-end', // Aligne le bouton à droite dans le conteneur parent
            width: '4cm', // Longueur du bouton
            height: '1.2cm', // Largeur du bouton
            backgroundColor: 'primary.main',
            '&:hover': {
              backgroundColor: 'primary.main',
            },
          }}
        >
          Envoyer
        </Button>
      </Box>
    </Box>
  );
}
