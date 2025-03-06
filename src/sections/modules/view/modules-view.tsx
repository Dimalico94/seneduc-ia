import { useState } from 'react';
import { Box, Button, Container, Grid, Stack, Typography, useTheme } from '@mui/material';
import { RouterLink } from 'src/routes/components';
import { CONFIG } from 'src/config-global';
import { Image } from 'src/components/image';
import { ModuleDescription } from '../components/module-description';
import { ModuleFeatures } from '../components/module-features';

// --------------------------
// Constantes
// --------------------------
const _mockDataModules = [
  {
    id: 1,
    name: 'Gestion de l’Etablissement',
    description: '',
    price_month: 1000,
    price_annual: 9000,
    features: [
      { id: 'mod_01_feat_01', title: 'Gestion des éléves' },
      { id: 'mod_01_feat_02', title: 'Gestion des professeurs' },
      { id: 'mod_01_feat_03', title: 'Gestion des classes' },
      { id: 'mod_01_feat_04', title: 'Gestion des cours' },
    ],
  },
  {
    id: 2,
    name: 'Gestion des Admissions',
    description: '',
    price_month: 300,
    price_annual: 2700,
    features: [
      { id: 'mod_02_feat_01', title: 'Gestion des inscriptions' },
      { id: 'mod_02_feat_02', title: 'Gestion des candidatures' },
      { id: 'mod_02_feat_03', title: 'Inscription en ligne' },
      { id: 'mod_02_feat_04', title: "Paiement des frais d'inscriotion" },
    ],
  },
  {
    id: 3,
    name: 'Gestion des Notes',
    description: '',
    price_month: 500,
    price_annual: 4500,
    features: [
      { id: 'mod_03_feat_01', title: 'Gestion des évaluations' },
      { id: 'mod_03_feat_02', title: 'Gestion des notes' },
      { id: 'mod_03_feat_03', title: 'Délibération des notes' },
      { id: 'mod_03_feat_04', title: 'Rapports des évaluations' },
    ],
  },
];

export function ModulesView() {
  // --------------------------
  // Private Attributes
  // --------------------------
  const theme = useTheme();
  const [currentModule, setcurrentModule] = useState(_mockDataModules[0]);

  // --------------------------
  // Private Methods
  // --------------------------
  const setFeaturesByModuleId = (index: number) => {
    setcurrentModule(_mockDataModules[index]);
  };

  // --------------------------
  // Rendered
  // --------------------------
  return (
    <>
      <Container>
        <Box>
          <Stack direction="column" gap={2}>
            <Typography
              color="#004B86"
              variant="h1"
              textAlign="center"
              fontFamily="sans-serif"
              fontStyle="normal"
              fontWeight={500}
              lineHeight=" 117.465%"
              textTransform="capitalize"
            >
              {' Découvrez les meilleurs Modules !'}
            </Typography>
            <Box paddingX={{ xs: 2, md: 10 }}>
              <Typography
                variant="body2"
                color="#202020"
                textAlign="center"
                fontFamily="sans-serif"
                fontStyle="normal"
                fontWeight={400}
                lineHeight="normal"
              >
                Découvrez tous les modules de notre système de gestion éducatif, où chaque module
                est conçu pour répondre aux besoins spécifiques des établissements scolaires et
                optimiser leurs opérations quotidiennes. Notre solution SaaS éducative offre des
                modules indépendants et spécialisés que les établissements peuvent sélectionner en
                fonction de leurs priorités.
              </Typography>
            </Box>
          </Stack>
        </Box>
        <Box>
          <Grid container spacing={2} paddingY={5}>
            <Grid item xs={6} md={7}>
              <Stack direction="column" gap={2}>
                {_mockDataModules.map((item, index) => (
                  <ModuleDescription
                    module={item}
                    index={index}
                    clickDetailModule={setFeaturesByModuleId}
                    key={item.id}
                    sx={{
                      backgroundColor: currentModule.id === item.id ? '#004B86' : 'none',
                      color: currentModule.id === item.id ? '#FFF' : '#202020',
                    }}
                  />
                ))}
              </Stack>
            </Grid>
            <Grid item xs={6} md={5}>
              <ModuleFeatures module={currentModule} />
            </Grid>
          </Grid>
        </Box>
        <Box borderRadius={1} border="1px solid rgba(217, 217, 217, 0.40)" bgcolor="#FFF" p={2}>
          <Grid container spacing={2}>
            <Grid item xs={12} md={8}>
              <Stack direction="column" gap={1} maxWidth={700}>
                <Typography variant="h6">
                  Débloquez , économisez d&apos;avantage - <br />
                  Boostez votre puissance avec notre offre groupée !
                </Typography>
                <Typography variant="body2">
                  Pourquoi se contenter de moins ? Abonnez-vous à notre forfait Premium et profitez
                  dès aujourd&apos;hui de toutes les fonctionnalités , une valeur maximale et une
                  commodité transparente !
                </Typography>
              </Stack>
            </Grid>
            <Grid item xs={12} md={4} margin="auto">
              <Box display="flex" justifyContent="center" paddingX={4}>
                <Box minWidth={100} width={150}>
                  <Image alt="test" src={`${CONFIG.assetsDir}/assets/images/money.png`} />
                </Box>
              </Box>
            </Grid>
          </Grid>
          <Stack direction="row" gap={2} pl={5} pt={5}>
            <Button
              component={RouterLink}
              href="#"
              variant="contained"
              size="medium"
              sx={{
                bgcolor: 'rgba(48, 203, 112, 0.10)',
                color: '#30CB70',
              }}
            >
              <Typography variant="body2">Voir les détails</Typography>
            </Button>
            <Button
              color="primary"
              component={RouterLink}
              href="#"
              variant="contained"
              size="medium"
            >
              <Typography variant="body2">Souscrire</Typography>
            </Button>
          </Stack>
        </Box>
      </Container>
    </>
  );
}
