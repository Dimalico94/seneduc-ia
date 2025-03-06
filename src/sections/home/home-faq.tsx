import {
  Accordion,
  AccordionDetails,
  AccordionSummary,
  Box,
  BoxProps,
  Container,
  Stack,
  Typography,
  useTheme,
} from '@mui/material';
import { useState } from 'react';
import { _mock } from 'src/_mock';
import { Iconify } from 'src/components/iconify';

const _faqs = [
  { title: 'À quoi sert cette plateforme ?', description: '' },
  { title: 'Qui peut utiliser cette plateforme ?', description: '' },
  { title: 'Les modules sont-ils disponibles individuellement ?', description: '' },
  { title: 'Puis-je tester les modules avant de m’abonner', description: '' },
  { title: "Comment puis-je m'abonner à un module ?", description: '' },
  { title: 'Comment se déroule la facturation ?', description: '' },
];
const _accordions = [..._faqs].map((_, index) => ({
  id: _mock.id(index),
  value: `panel${index + 1}`,
  heading: _faqs[index].title,
  subHeading: _mock.postTitle(index),
  detail: _mock.description(index),
}));

export function HomeFaq({ sx, ...other }: BoxProps) {
  const theme = useTheme();
  const [controlled, setControlled] = useState<string | false>(false);
  const handleChangeControlled =
    (panel: string) => (event: React.SyntheticEvent, isExpanded: boolean) => {
      setControlled(isExpanded ? panel : false);
    };
  return (
    <Box component="section">
      <Container>
        <Box
          p={2}
          sx={{ background: '#FAFAFA', boxShadow: '1.5px 1.5px 30px 0px rgba(0, 75, 134, 0.06)' }}
        >
          <Typography variant="h4" py={1}>
            FAQ’s
          </Typography>
          <Typography
            variant="body2"
            py={1}
            fontFamily="Public Sans"
            color="rgba(32, 32, 32, 0.40)"
          >
            Réponses aux questions les plus fréquemment posées.
          </Typography>
          <Box py={1}>
            {_accordions.map((accordion, index) => (
              <Accordion key={accordion.value}>
                <AccordionSummary
                  expandIcon={<Iconify icon="eva:arrow-ios-downward-fill" />}
                  sx={{ height: 60 }}
                >
                  <Typography variant="subtitle1">{accordion.heading}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{accordion.detail}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Box>
        </Box>
      </Container>
    </Box>
  );
}
