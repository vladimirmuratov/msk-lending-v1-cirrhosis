import { Box, Typography } from '@mui/material';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';
import { memo } from 'react';

export const WhyWeBlock = memo(() => {
    return (
        <Box
            component="section"
            id="whyWe"
            sx={{
                scrollMarginTop: { xs: '120px', sm: '50px' },
                paddingX: '12px',
                paddingY: { xs: '25px', sm: '50px' },
                color: 'var(--black)'
            }}
        >

            <Typography
                variant="h2"
                sx={{
                    color: 'var(--red)',
                    marginBottom: '20px',
                    fontSize: { xs: '22px', sm: '34px' },
                    fontWeight: 300,

                }}
            >
                Почему выбирают нас?
            </Typography>

            <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px', }}>
                <Box sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Работаем с ведущими федеральными и ведомственными клиниками Москвы
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Госпитализация возможна в течение нескольких часов
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Доступ к современному оборудованию и квалифицированным врачам
                    </Typography>
                </Box>
                <Box
                    sx={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                    <CheckBoxOutlinedIcon sx={{ color: 'var(--red)' }} />
                    <Typography
                        variant="h3"
                        sx={{ color: 'var(--main-color)', fontSize: { xs: 18, sm: 20 }, fontWeight: 400 }}>
                        Персональный куратор для каждого пациента
                    </Typography>
                </Box>
            </Box>
        </Box>
    );
});
