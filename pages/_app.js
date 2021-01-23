import { ApolloProvider } from '@apollo/client';
import { ThemeProvider } from '@emotion/react';
import { globalStyles } from '@/styles/global';
import theme from '@/styles/theme';
import { useApollo } from '@/hooks/useApollo';

function MyApp({ Component, pageProps }) {
  const apolloClient = useApollo(pageProps.initialApolloState);

  return (
    <ApolloProvider client={apolloClient} suppressHydrationWarning>
      {globalStyles}
      <ThemeProvider theme={theme}>
        <Component {...pageProps} />
      </ThemeProvider>
    </ApolloProvider>
  );
}

export default MyApp;
