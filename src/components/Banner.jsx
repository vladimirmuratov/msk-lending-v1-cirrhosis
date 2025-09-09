'use client';

import { Box, Button, Typography } from '@mui/material';
import { phoneNumber } from '@/config';
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';

export const Banner = () => {
    const router = useRouter();
    const [isMobile, setMobile] = useState(undefined);

    useEffect(() => {
        const os = navigator.userAgentData.platform;

        if (os === 'Android' || os === 'iOS') {
            setMobile(true);
        } else {
            setMobile(false);
        }

    }, []);

    return (
        <Box
            component="figure"
            className="banner-container"
            sx={{
                position: 'relative',
                // marginTop: isMobile ? {xs: '110px', sm: '95px'} : 0,
                marginTop: isMobile ? { xs: '110px', sm: 0 } : 0,
                paddingBottom: isMobile ? { xs: '25px', sm: 0 } : 0
            }}
        >

            <Box
                sx={{
                    width: '100%',
                    height: {
                        xs: 'calc(var(--index) * 30)',
                        sm: 'calc(var(--index) * 30)',
                        md: 'calc(var(--index) * 30)',
                        lg: 'calc(var(--index) * 30)'
                    },
                    backgroundImage: `url(/images/banner7.webp)`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center'
                }}
            />
            <Box
                sx={{
                    position: 'absolute',
                    // top: {xs: '10%', sm: '10%'},
                    top: '40%',
                    transform: 'translateY(-50%)',
                    left: '5%',
                }}
            >
                <Typography
                    variant="h1"
                    sx={{
                        fontSize: { xs: 24, sm: 40, md: 60 },
                        fontWeight: 600,
                        color: 'var(--main-color)',
                        textShadow: '2px 2px 2px white',
                        marginBottom: { xs: '10px', sm: '15px' },
                        textTransform: 'uppercase',
                    }}>
                    Лечение цирроза печени
                </Typography>

                {typeof isMobile === 'boolean' && isMobile
                    ? (<Box
                        sx={{
                            display: 'inline',
                        }}
                    >
                        <Button
                            className="animation-btn"
                            onClick={() => router.push(`tel:${phoneNumber}`)}
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{
                                display: isMobile ? 'block' : 'none'
                            }}
                        >
                            Позвонить
                        </Button>

                    </Box>)
                    : /*<Typography
                        sx={{
                            color: 'var(--red)',
                            display: isMobile ? 'none' : 'block',
                            fontSize: { xs: 16, sm: 32, md: 62 },
                            fontWeight: 600,
                            textShadow: '0px 4px 4px lightgray',
                        }}
                    >
                        {phoneNumber}
                    </Typography>*/
                    <></>
                }
            </Box>

        </Box>
    );
};
