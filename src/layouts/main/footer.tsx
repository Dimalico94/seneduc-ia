import type { Theme, SxProps, Breakpoint } from '@mui/material/styles';

import Box from '@mui/material/Box';
import Link from '@mui/material/Link';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import { InputAdornment } from '@mui/material';
import { useTheme } from '@mui/material/styles';
import Container from '@mui/material/Container';
import Grid from '@mui/material/Unstable_Grid2';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { useForm } from 'react-hook-form';
import { LoadingButton } from '@mui/lab';
import { zodResolver } from '@hookform/resolvers/zod';
import { m } from 'framer-motion';

import { CONFIG } from "src/config-global";
import { SignInSchema, SignInSchemaType } from 'src/auth/view/jwt';
import { RouterLink } from 'src/routes/components';
import { removeLastSlash } from 'src/routes/utils';
import { Field, Form } from 'src/components/hook-form';
import { usePathname } from 'src/routes/hooks';
import { varFade } from 'src/components/animate';
import { _socials } from 'src/_mock';
import { TwitterIcon, FacebookIcon, LinkedinIcon, InstagramIcon, ReturnTopPageIcon } from 'src/assets/icons';


import { RedirectButton } from 'src/sections/home/components/home-button';

// ----------------------------------------------------------------------

const LINKS = [
    {
        headline: 'Pages',
        children: [
            { name: 'Accueil', href: '#' },
            { name: 'Modules', href: '#' },
            { name: 'Tarifs', href: '#' },
            { name: 'Souscription', href: '#' },
            { name: 'Contact', href: '#' },
        ],
    },
    {
        headline: 'Resources',
        children: [
            { name: 'Centre d’aide', href: '#' },
            { name: 'Faq’s', href: '#' },
            { name: 'Partenaires', href: '#' },
        ],
    },
    {
        headline: 'Entrer en contact',
        children: [
            { name: '33 800 00 22', href: '#' },
            { name: 'info@seneduc.com', href: '#' },
            { name: 'Cité impot et domaines, Villa 80-Patte d’oie, Dakar 3000', href: '#' },
        ]
    },
];
const PATH_HOME = '/';

// ----------------------------------------------------------------------

export type FooterProps = {
    layoutQuery: Breakpoint;
    sx?: SxProps<Theme>;
};

export function HomeFooter({ layoutQuery, sx }: FooterProps) {
    const theme = useTheme();
    const isHome = removeLastSlash(usePathname()) === PATH_HOME;
    const defaultValues = {
        email: "",
    };
    const methods = useForm<SignInSchemaType>({
        resolver: zodResolver(SignInSchema),
        defaultValues
    });

    /** Section Request Demo */
    const sectionDemo = (
        <Box
            marginTop={{ xs: -15, md: -30 }}
            sx={{
                margin: "auto",
                background: "#004B86",
                borderRadius: 2,
                position: "relative"
            }}
        >
            <Container>
                <Box display="flex" alignItems="center" justifyContent="center" >
                    <Box>
                        <m.div variants={varFade().inUp}>
                            <Box
                                component={m.img}
                                animate={{ y: [-20, 0, -20] }}
                                transition={{ duration: 4, repeat: Infinity }}
                                alt="rocket"
                                src={`${CONFIG.assetsDir}/assets/illustrations/illustration-rocket-large.webp`}
                                sx={{ zIndex: 9, width: 360, aspectRatio: '1/1' }}
                            />
                        </m.div>
                    </Box>
                    <Stack direction="column" spacing={1} alignItems="center" paddingX={{ xs: 1, md: 3, lg: 5 }}>
                        <Typography variant="h3" fontSize={{ xs: 22, sm: 24, md: 48 }}>
                            Prêt à se lancer ?
                        </Typography>
                        <Typography variant="body1">
                            La démo est offerte à la maison. Prenez-le !
                        </Typography>
                    </Stack>
                </Box>
                <Box display="flex" alignItems="center" justifyContent="center" p={2}>
                    <RedirectButton title="Demander une démo" />
                </Box>
            </Container>
        </Box>
    );

    return (
        <Box component="footer" sx={{ position: 'relative', pt: 25, ...sx }}>
            <Box paddingX={{ xs: 1, sm: 8 }} bgcolor='#202020' color='#F5F5F5'>
                <Divider />
                {isHome ? sectionDemo : null}
                <Container
                    maxWidth={false}
                    sx={{
                        pb: 3,
                        pt: 3,
                        textAlign: 'center',
                        [theme.breakpoints.up(layoutQuery)]: { textAlign: 'unset' },
                    }}
                >
                    <Grid
                        container
                        sx={{
                            mt: 3,
                            [theme.breakpoints.up(layoutQuery)]: { justifyContent: 'space-between' },
                        }}
                    >
                        <Grid {...{ xs: 12, [layoutQuery]: 6, pr: 4 }}>
                            <Typography
                                variant="h3"
                                sx={{
                                    mx: 'auto',
                                    width: '100%',
                                    [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
                                }}
                            >
                                Inscrivez-vous à la newsletter
                            </Typography>
                            <Typography
                                variant="h6"
                                sx={{
                                    pt: 2,
                                    pb: 2,
                                    mx: 'auto',
                                    width: '80%',
                                    color: '#F5F5F5',
                                    opacity: 0.6,
                                    [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
                                }}
                            >
                                Abonnez-vous à notre newsletter pour les nouveaux produits et les mises à jour.
                            </Typography>
                            <Box
                                sx={{
                                    pt: 2,
                                    pb: 2,
                                    textAlign: 'center',
                                    margin: "auto",
                                    minWidth: 200,
                                    maxWidth: 350,
                                    [theme.breakpoints.up(layoutQuery)]: { mx: 'unset' },
                                }}
                            >
                                <Form methods={methods}>
                                    <Field.Text
                                        name="email"
                                        placeholder="Entrez votre email"
                                        type='text'
                                        sx={{ color: "red" }}
                                        InputLabelProps={{ shrink: true }}
                                        InputProps={{
                                            endAdornment: (
                                                <InputAdornment position="end">
                                                    <LoadingButton
                                                        sx={{ paddingX: 1, [theme.breakpoints.up(layoutQuery)]: { paddingX: 3 } }}
                                                        fullWidth
                                                        color="success"
                                                        size="large"
                                                        type="submit"
                                                        variant="contained"
                                                        loadingIndicator="S'abonner..."
                                                    >
                                                        S&apos;abonner
                                                    </LoadingButton>
                                                </InputAdornment>
                                            ),
                                        }}
                                    />

                                </Form>
                            </Box>

                        </Grid>

                        <Grid {...{ xs: 12, [layoutQuery]: 6 }}>
                            <Stack
                                spacing={5}
                                sx={{
                                    flexDirection: 'column',
                                    [theme.breakpoints.up(layoutQuery)]: { flexDirection: 'row' },
                                }}
                            >
                                {LINKS.map((list) => (
                                    <Stack
                                        key={list.headline}
                                        spacing={2}
                                        sx={{
                                            width: 1,
                                            alignItems: 'center',
                                            [theme.breakpoints.up(layoutQuery)]: { alignItems: 'flex-start' },
                                        }}
                                    >
                                        <Typography component="div" variant="h6" sx={{ color: '#30CB70' }}>
                                            {list.headline}
                                        </Typography>

                                        {list.children.map((link) => (
                                            <Link
                                                key={link.name}
                                                component={RouterLink}
                                                href={link.href}
                                                color="inherit"
                                                variant="body2"
                                            >
                                                {link.name}
                                            </Link>
                                        ))}
                                    </Stack>
                                ))}
                            </Stack>
                        </Grid>
                    </Grid>

                    <Stack
                        direction="row"
                        sx={{
                            mt: 2,
                            mb: 2,
                            justifyContent: 'center',
                            [theme.breakpoints.up(layoutQuery)]: { mb: 0, justifyContent: 'flex-end' },
                        }}
                    >
                        {_socials.map((social) => (
                            <IconButton key={social.label} color="inherit">
                                {social.value === 'twitter' && <TwitterIcon />}
                                {social.value === 'facebook' && <FacebookIcon />}
                                {social.value === 'instagram' && <InstagramIcon />}
                                {social.value === 'linkedin' && <LinkedinIcon />}
                            </IconButton>
                        ))}
                    </Stack>

                    <Divider />
                    <Grid container spacing={2}>
                        <Grid {... { xs: 6 }}>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                © 2024 senEduc. Tous droits réservés.
                            </Typography>
                        </Grid>
                        <Grid {... { xs: 2 }}>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Conditions d&apos;utilisation
                            </Typography>
                        </Grid>
                        <Grid {... { xs: 2 }}>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Politique de confidentialité
                            </Typography>
                        </Grid>
                        <Grid {... { xs: 2, display: 'flex', justifyContent: 'flex-end', margin: "auto" }}>
                            <Typography variant="body2" sx={{ mt: 2 }}>
                                Retour en haut
                            </Typography>
                            <Box sx={{
                                mt: 1,
                                mr: 1,
                                ml: 1
                            }}>
                                <IconButton key='topPage' color="inherit">
                                    <ReturnTopPageIcon />
                                </IconButton>
                            </Box>
                        </Grid>

                    </Grid>

                </Container>
            </Box >
        </Box>
    );
}