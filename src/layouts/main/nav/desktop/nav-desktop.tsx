import Stack from '@mui/material/Stack';

import { List} from '@mui/material';
import { NavUl } from 'src/components/nav-section';
import { NavMainProps } from '../../types';
import { NavList } from '../mobile/nav-mobile-list';

// ----------------------------------------------------------------------


export function NavDesktop({ data, sx }: NavMainProps) {
    return (
        <Stack component="nav" sx={{ height: 1, ...sx }}>
            <NavUl
                sx={{
                    alignItems: 'center',
                    display: 'block',
                }}
            >
                <List style={{
                    display: 'flex'
                }}>
                    {data.map((item) => (
                        <NavList key={item.title} data={item} />
                    ))}
                </List>
            </NavUl>
        </Stack>
    );
}
