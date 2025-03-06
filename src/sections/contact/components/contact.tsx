import { Box, BoxProps, Button, Grid, Stack, Typography } from '@mui/material';
import { ContactProps } from '../contact-type';

// --------------------------
// Props
// --------------------------
type ContactDescriptionProps = ContactProps & {
  index: number;
  clickDetailContact: (param: number) => void;
} & BoxProps;

// Component
// --------------------------
export function ContactDescription({
    contact,
    index,
    clickDetailContact,
    sx,
  }: ContactDescriptionProps) {
    // --------------------------
    // Rendered
    // --------------------------
    return (
      <Box borderRadius={1} border="1px solid rgba(217, 217, 217, 0.80)" sx={{ ...sx }}>
        <Button fullWidth onClick={() => clickDetailContact(index)}>
          <Grid container>
            {/* Contact Name */}
            <Grid item xs={12} md={8}>
              <Typography variant="h6" textAlign="left">
                {contact?.name}
              </Typography>
            </Grid>
            {/* Contact Email */}
            <Grid item xs={12} md={4}>
              <Typography
                variant="body2"
                fontSize={14}
                textAlign="right"
                sx={{ opacity: 0.8 }}
              >
                {contact?.email}
              </Typography>
            </Grid>
            {/* Subject */}
            <Grid item xs={12}>
              <Typography
                variant="body2"
                fontSize={12}
                sx={{ opacity: 0.7, mt: 1 }}
                textAlign="left"
              >
                {contact?.subject || 'Aucun sujet'}
              </Typography>
            </Grid>
          </Grid>
        </Button>
      </Box>
    );
  }
  