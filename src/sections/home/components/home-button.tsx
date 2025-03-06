/* All Buttons Home Page */

import { Box, Breakpoint, Button, ButtonProps, Typography, useMediaQuery, useTheme } from "@mui/material";
import { RouterLink } from "src/routes/components";
import { RedirectIcon } from "./home-icon";

export function RedirectButton({ title, sx }: ButtonProps) {
    const theme = useTheme();
    const layoutQuery: Breakpoint = 'md';
    return (
        <Button

            component={RouterLink}
            href='#'
            variant="contained"
            sx={{ ...sx, pl: 2, pr: 2, backgroundColor: '#E1F1E8', color: '#30CB70' }}
            size={useMediaQuery(theme.breakpoints.down(layoutQuery)) ? 'small' : 'medium'}
            startIcon={
                <Box width={{ xs: 6, sm: 10, lg: 12 }}>
                    <RedirectIcon />
                </Box>
            }
        >
            <Typography variant='body2' fontSize={{ xs: 10, lg: 12 }}>
                {title}
            </Typography>
        </Button>
    )
}
