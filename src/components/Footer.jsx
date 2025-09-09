import { Box, Typography } from '@mui/material';
import { phoneNumber } from '@/config';

export const Footer = () => {
    return (
        <Box
            component="footer"
            sx={{
                borderTop: '1px solid var(--main-color)',
                display: 'flex',
                flexDirection: { xs: 'column', sm: 'row' },
                justifyContent: 'space-between',
                alignItems: 'center',
                paddingX: {xs: '20px', sm: '32px'},
                paddingY: '20px'
            }}>
            <Box sx={{color: 'var(--main-color)', display: 'flex', alignItems: 'center', gap: '10px'}}>
                <Typography
                    sx={{
                        fontSize: '20px',
                        fontWeight: 600,
                        letterSpacing: 2
                    }}>
                    МСК
                </Typography>
                <Box component="span">&copy;</Box>
                <Box component="span">2014 — {new Date().getFullYear()}</Box>
            </Box>
            <Box sx={{
                color: 'var(--main-color)',
                display: 'flex',
                flexDirection: 'column',
                alignItems: { xs: 'center', sm: 'flex-end' }
            }}>
                <Typography sx={{ fontSize: '14px' }}>г. Москва, Мичуринский пр-т, д. 6</Typography>
                <Typography sx={{ fontSize: '14px' }}>{phoneNumber}</Typography>
            </Box>
        </Box>
    );
};
