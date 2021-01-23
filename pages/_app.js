import { ThemeProvider } from '@emotion/react';
import { globalStyles } from '@/styles/global';
import theme from '@/styles/theme';

function MyApp({ Component, pageProps }) {
  return (
    <>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </>
  );
}

export default MyApp;
