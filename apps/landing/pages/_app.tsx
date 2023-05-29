import { AppProps } from 'next/app';
import { Global, ThemeProvider } from '@emotion/react';
import { globalStyles, theme } from '@/styles';
import { Layout } from '@/common';

const MyApp = ({ Component, pageProps }: AppProps) => (
  <>
    <Global styles={globalStyles} />
    <ThemeProvider theme={theme}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </ThemeProvider>
  </>
);

export default MyApp;
