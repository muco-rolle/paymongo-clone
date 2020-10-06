import { AppProps } from 'next/app';
import { GeistProvider, CssBaseline } from '@geist-ui/react';
import { theme } from 'theme';
import { ThemeProvider } from 'styled-components';
import { DocumentHead } from 'components';

import 'typeface-manrope'; // main font

const App = ({ Component, pageProps }: AppProps) => {
    return (
        <ThemeProvider theme={theme}>
            <GeistProvider theme={theme}>
                <DocumentHead />
                <CssBaseline />
                <Component {...pageProps} />
            </GeistProvider>
        </ThemeProvider>
    );
};

export default App;
