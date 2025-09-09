import { AppRouterCacheProvider } from '@mui/material-nextjs/v14-appRouter';
import { ThemeProvider } from '@mui/material/styles';
import { Montserrat } from 'next/font/google';
import { Box } from '@mui/material';
import { Footer } from '@/components/Footer';
import { Navigation } from '@/components/navigation/Navigation';
import {Metrika} from '@/components/Metrika'
import { Suspense } from 'react';
import theme from '@/theme';
import './globals.css';

const montserrat = Montserrat({ subsets: ['latin', 'cyrillic'] });

export const metadata = {
    metadataBase: new URL('https://cirrhosis.mskdoctor.ru'),
    title: 'Лечение цирроза печени в Москве | Госпитализация и терапия. Звоните! 8 (499) 719-81-00, 24/7',
    description: 'Лечение цирроза печени в Москве. Госпитализация в федеральные и ведомственные клиники. Современная диагностика и терапия. Приём пациентов из регионов и СНГ.',
    keywords: ['лечение цирроза печени, платная госпитализация цирроз, лечение печени Москва, гастроэнтеролог цирроз, цирроз печени терапия, помощь при циррозе'],
    other: {
        ['yandex-verification']: '63b15477d46dd1f6',
    },
    openGraph: {
        title: 'Лечение цирроза печени в Москве | Госпитализация и терапия. Звоните! 8 (499) 719-81-00, 24/7',
        description: 'Лечение цирроза печени в Москве. Госпитализация в федеральные и ведомственные клиники. Современная диагностика и терапия. Приём пациентов из регионов и СНГ.',
        images: ['/images/banner7.webp'],
        url: 'https://cirrhosis.mskdoctor.ru',
        type: 'website',
        locale: 'ru_RU',
    }
};

export default function RootLayout({ children }) {
    return (
        <html lang="en" prefix="og: https://ogp.me/ns#">
        <body className={montserrat.className}>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <Box className="container">
                    <Suspense>
                        <Navigation />
                        {children}
                        <Footer />
                        <Metrika/>
                    </Suspense>
                </Box>
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    );
}
