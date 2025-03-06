import { useEffect } from 'react';

import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';

import { paths } from 'src/routes/paths';
import { usePathname } from 'src/routes/hooks';
import { RouterLink } from 'src/routes/components';

import { Iconify } from 'src/components/iconify';
import { Logo } from 'src/components/logo';
import { LogoMain } from 'src/components/logo/logo-main';
import { NavUl } from 'src/components/nav-section';
import { Scrollbar } from 'src/components/scrollbar';
import { NavMainProps } from '../../types';
import { NavList } from './nav-mobile-list';

import { SignInButton } from '../../../components/sign-in-button';


// ----------------------------------------------------------------------

export type NavMobileProps = NavMainProps & {
    open: boolean;
    onClose: () => void;
    slots?: {
        topArea?: React.ReactNode;
        bottomArea?: React.ReactNode;
    };
};

export function NavMobile({ data, open, onClose, slots, sx }: NavMobileProps) {
    const pathname = usePathname();

    useEffect(() => {
        if (open) {
            onClose();
        }
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [pathname]);

    return (
        <Drawer
            open={open}
            onClose={onClose}
            PaperProps={{
                sx: {
                    display: 'flex',
                    flexDirection: 'column',
                    width: 'var(--layout-nav-mobile-width)',
                    ...sx,
                },
            }}
        >
            {slots?.topArea ?? (
                <Box display="flex" sx={{ pt: 3, pb: 2, pl: 2.5 }}>
                    <LogoMain sx={{ textDecoration: 'none' }} />
                </Box>
            )}

            <Scrollbar fillContent>
                <Box component="nav" display="flex" flexDirection="column" flex="1 1 auto" sx={{ pb: 3 }}>
                    <NavUl>
                        {data.map((list) => (
                            <NavList key={list.title} data={list} />
                        ))}
                    </NavUl>
                </Box>
            </Scrollbar>

            {slots?.bottomArea ?? (
                <Box gap={1.5} display="flex" sx={{ px: 2.5, py: 3 }}>
                    <Button
                        fullWidth
                        component={RouterLink}
                        href='#'
                        variant="contained"
                        sx={{ p: 2, backgroundColor: '#E1F1E8', color: '#30CB70' }}
                        startIcon={
                            <svg xmlns="http://www.w3.org/2000/svg" width="15" height="18" viewBox="0 0 15 18" fill="none">
                                <path d="M7.54318 11.8574C3.57938 11.8574 0.193848 12.4697 0.193848 14.9171C0.193848 17.3663 3.55785 17.9997 7.54318 17.9997C11.507 17.9997 14.8925 17.3874 14.8925 14.9401C14.8925 12.4908 11.5285 11.8574 7.54318 11.8574Z" fill="#30CB70" />
                                <path d="M7.5432 9.52483C10.2428 9.52483 12.4062 7.40618 12.4062 4.76241C12.4062 2.11865 10.2428 0 7.5432 0C4.84457 0 2.68018 2.11865 2.68018 4.76241C2.68018 7.40618 4.84457 9.52483 7.5432 9.52483Z" fill="#30CB70" />
                            </svg>
                        }
                    >
                        Se connecter
                    </Button>
                </Box>
            )}
        </Drawer>
    );
}
